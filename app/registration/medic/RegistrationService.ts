// app/medic/register/RegistrationService.ts
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db, auth } from "@/app/utils/firebaseConfig";
import type { MedicRegistrationData } from "./type";

export const submitMedicRegistration = async (data: MedicRegistrationData) => {
  const email = data.personalInfo.email.trim().toLowerCase();

  // 1. Create the Firebase Auth user — the source of truth for
  //    "is this email already taken?"
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

  // 2. Build the medic record.
  const now = new Date().toISOString();

  const medicRecord = {
    role: "medic",

    personalInfo: {
      firstName: data.personalInfo.firstName.trim(),
      lastName: data.personalInfo.lastName.trim(),
      email,
      phone: data.personalInfo.phone.trim(),
      gender: data.personalInfo.gender,
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

    // FIX: previously hard-coded agreedToPrivacy to false while the UI
    // collects a combined consent. Record what the user actually agreed to.
    legal: {
      agreedToTerms: data.agreedToTerms,
      agreedToPrivacy: data.agreedToTerms,
      agreedToCommitment: false,
      signature: "",
      date: now,
    },

    status: "pending" as const,
    verified: false,
    profileComplete: false,
    uid,
    createdAt: now,
    lastUpdated: now,
  };

  // 3. Save keyed by UID. FIX: roll back the Auth user if this fails so
  //    the user isn't stranded with an account that has no profile.
  try {
    await set(ref(db, `doza_medics/${uid}`), medicRecord);
  } catch (dbErr) {
    try {
      if (auth.currentUser && auth.currentUser.uid === uid) {
        await deleteUser(auth.currentUser);
      }
    } catch (rollbackErr) {
      console.error(
        "Failed to roll back auth user after DB write failure",
        rollbackErr,
      );
    }
    throw new Error(
      "We couldn't finish setting up your account. Please try again.",
    );
  }

  return uid;
};
