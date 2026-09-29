// import { getDatabase, ref, push, set } from "firebase/database";
// import {
//   getStorage,
//   ref as storageRef,
//   uploadBytes,
//   getDownloadURL,
// } from "firebase/storage";
// import { app } from "../../utils/firebaseConfig";
// import { MedicRegistrationData } from "./type";

// export const submitMedicRegistration = async (data: MedicRegistrationData) => {
//   const db = getDatabase(app);
//   const storage = getStorage(app);

//   try {
//     // Upload documents first
//     const uploadedDocuments = await Promise.all(
//       data.credentials.documents.map(async (doc) => {
//         if (doc.fileUrl.startsWith("blob:")) {
//           // Convert blob to file and upload
//           const response = await fetch(doc.fileUrl);
//           const blob = await response.blob();
//           const fileRef = storageRef(
//             storage,
//             `documents/${data.personalInfo.email}/${doc.type}_${Date.now()}`,
//           );
//           const snapshot = await uploadBytes(fileRef, blob);
//           const downloadURL = await getDownloadURL(snapshot.ref);
//           return { ...doc, fileUrl: downloadURL };
//         }
//         return doc;
//       }),
//     );

//     // Prepare final data
//     const registrationData = {
//       ...data,
//       role: data.role,
//       credentials: {
//         ...data.credentials,
//         documents: uploadedDocuments,
//       },
//       createdAt: new Date().toISOString(),
//       lastUpdated: new Date().toISOString(),
//       status: "pending" as const,
//       verified: false,
//     };

//     // Save to database
//     const medicsRef = ref(db, "doza_medics");
//     const newMedicRef = push(medicsRef);
//     await set(newMedicRef, {
//       ...registrationData,
//       id: newMedicRef.key,
//     });

//     return newMedicRef.key;
//   } catch (error) {
//     console.error("Error submitting medic registration:", error);
//     throw error;
//   }
// };

// app/medic/register/RegistrationService.ts
// app/medic/register/RegistrationService.ts
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db, auth } from "@/app/utils/firebaseConfig";
import type { MedicRegistrationData } from "./type";

export const submitMedicRegistration = async (data: MedicRegistrationData) => {
  const email = data.personalInfo.email.trim().toLowerCase();

  // 1. Create the Firebase Auth user — this is the source of truth for
  //    "is this email already taken?" Firebase throws auth/email-already-in-use
  //    if it is, so we don't need a separate DB check.
  let uid: string;
  try {
    const cred = await createUserWithEmailAndPassword(
      auth,
      email,
      data.personalInfo.password,
    );
    uid = cred.user.uid;
  } catch (err: any) {
    if (err.code === "auth/email-already-in-use") {
      throw new Error(
        "This email is already registered. Please log in instead.",
      );
    }
    if (err.code === "auth/weak-password") {
      throw new Error("Password is too weak. Use at least 8 characters.");
    }
    if (err.code === "auth/invalid-email") {
      throw new Error("That email address isn't valid.");
    }
    throw err;
  }

  // 2. Build the medic record — keyed by the Auth UID
  const now = new Date().toISOString();

  const medicRecord = {
    role: "medic",

    personalInfo: {
      firstName: data.personalInfo.firstName.trim(),
      lastName: data.personalInfo.lastName.trim(),
      email,
      phone: data.personalInfo.phone.trim(),
      gender: data.personalInfo.gender,
      // No password field — Firebase Auth holds it
    },

    professionalInfo: {
      role: "",
      customRole: "",
      specialties: [],
      customSpecialty: "",
      licenseNumber: "",
      yearsOfExperience: 0,
      qualifications: [],
      bio: "",
    },

    practiceInfo: {
      consultationTypes: { inPerson: true, online: false, homeVisit: false },
      hourlyRate: 0,
      availability: {
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        hours: { start: "09:00", end: "17:00" },
        emergencyAvailable: false,
      },
      languages: ["English"],
    },

    location: {
      address: "",
      city: "",
      state: "",
      country: "",
      lat: 0,
      lng: 0,
      serviceRadius: 50,
    },

    credentials: { documents: [], verified: false },

    legal: {
      agreedToTerms: data.agreedToTerms,
      agreedToPrivacy: false,
      agreedToCommitment: false,
      signature: "",
      date: "",
    },

    status: "pending" as const,
    verified: false,
    profileComplete: false,
    uid, // stored inside too, handy for debugging
    createdAt: now,
    lastUpdated: now,
  };

  // 3. Save keyed by UID — direct write, no query, no index
  await set(ref(db, `doza_medics/${uid}`), medicRecord);

  return uid;
};
