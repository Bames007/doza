// // app/api/user/register/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import admin from "firebase-admin";
// import { firebaseConfig } from "@/app/utils/firebaseConfig";

// // Initialize Firebase Admin SDK as a singleton using the same config
// if (!admin.apps.length) {
//   // Admin SDK requires service account credentials; these are server-side env vars
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: firebaseConfig.projectId,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     }),
//     databaseURL: firebaseConfig.databaseURL,
//   });
// }

// const db = admin.database();
// const auth = admin.auth();

// // Helper to validate required fields
// const validateRequired = (data: any, fields: string[]): string | null => {
//   for (const field of fields) {
//     if (
//       !data[field] ||
//       (typeof data[field] === "string" && !data[field].trim())
//     ) {
//       return field;
//     }
//   }
//   return null;
// };

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { personalInfo, selectedPlan, agreedToTerms } = body;

//     console.log("📝 REGISTRATION ATTEMPT:", {
//       email: personalInfo?.email,
//       selectedPlan,
//     });

//     // 1. Validate top-level structure
//     if (!personalInfo || !selectedPlan || !agreedToTerms) {
//       return NextResponse.json(
//         { success: false, error: "Missing required sections" },
//         { status: 400 },
//       );
//     }

//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       password,
//       dateOfBirth,
//       gender,
//       avatar,
//     } = personalInfo;

//     // 2. Validate all personal fields
//     const missingField = validateRequired(personalInfo, [
//       "firstName",
//       "lastName",
//       "email",
//       "phone",
//       "password",
//       "dateOfBirth",
//       "gender",
//     ]);

//     if (missingField) {
//       return NextResponse.json(
//         { success: false, error: `${missingField} is required` },
//         { status: 400 },
//       );
//     }

//     // 3. Additional format validations
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       return NextResponse.json(
//         { success: false, error: "Invalid email format" },
//         { status: 400 },
//       );
//     }

//     if (password.length < 6) {
//       return NextResponse.json(
//         { success: false, error: "Password must be at least 6 characters" },
//         { status: 400 },
//       );
//     }

//     // 4. Create Firebase Auth user (Admin SDK required)
//     let userRecord;
//     try {
//       userRecord = await auth.createUser({
//         email,
//         password,
//         displayName: `${firstName} ${lastName}`,
//         phoneNumber: phone,
//       });
//       console.log("✅ Firebase Auth user created:", userRecord.uid);
//     } catch (authError: any) {
//       console.error("❌ Auth creation failed:", authError);
//       // Map common Firebase errors
//       if (authError.code === "auth/email-already-exists") {
//         return NextResponse.json(
//           { success: false, error: "Email already registered" },
//           { status: 409 },
//         );
//       }
//       if (authError.code === "auth/invalid-email") {
//         return NextResponse.json(
//           { success: false, error: "Invalid email format" },
//           { status: 400 },
//         );
//       }
//       if (authError.code === "auth/weak-password") {
//         return NextResponse.json(
//           { success: false, error: "Password should be at least 6 characters" },
//           { status: 400 },
//         );
//       }
//       throw authError; // Re-throw unexpected errors
//     }

//     const uid = userRecord.uid;

//     // 5. Prepare user profile (matches mobile structure)
//     const userProfile = {
//       personalProfile: {
//         fname: firstName,
//         lname: lastName,
//         age: dateOfBirth,
//         gender,
//         phone,
//         selectedImage: avatar || "",
//       },
//       encryptedFCMToken: "",
//       familyAndFriends: [],
//       medicalProfile: {
//         allergies: "",
//         asthma: false,
//         diabetic: false,
//         heartDisease: false,
//         hypertension: false,
//         smoker: false,
//         ulcer: false,
//       },
//       drugSessions: {},
//       subscription: {
//         plan: selectedPlan,
//         startDate: new Date().toISOString(),
//         status: "active",
//       },
//     };

//     // 6. Save to Realtime Database
//     try {
//       await db.ref(`doza/users/${uid}`).set(userProfile);
//       console.log("✅ User profile saved to database");
//     } catch (dbError: any) {
//       console.error("❌ Database save failed:", dbError);
//       // If database fails, we should ideally delete the auth user to maintain consistency
//       await auth.deleteUser(uid).catch(console.error);
//       return NextResponse.json(
//         { success: false, error: "Failed to save user data" },
//         { status: 500 },
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       uid,
//       message: "User created successfully",
//     });
//   } catch (error: any) {
//     console.error("❌ Registration error:", error);
//     return NextResponse.json(
//       { success: false, error: error.message || "Registration failed" },
//       { status: 500 },
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "@/app/utils/firebaseConfig";

const db = getDatabase(app);

// Helper to validate required fields
const validateRequired = (data: any, fields: string[]): string | null => {
  for (const field of fields) {
    const value = data[field];
    if (
      value === undefined ||
      value === null ||
      (typeof value === "string" && !value.trim())
    ) {
      return field;
    }
  }
  return null;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { uid, personalInfo, selectedPlan, agreedToTerms } = body;

    console.log("📝 REGISTRATION ATTEMPT:", {
      uid,
      email: personalInfo?.email,
      selectedPlan,
    });

    // 1. Validate required fields
    if (!uid) {
      return NextResponse.json(
        { success: false, error: "User UID is required" },
        { status: 400 },
      );
    }
    if (!personalInfo || !selectedPlan || !agreedToTerms) {
      return NextResponse.json(
        { success: false, error: "Missing required sections" },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, phone, dateOfBirth, gender, avatar } =
      personalInfo;

    // 2. Validate personal fields (password not needed here)
    const missingField = validateRequired(personalInfo, [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dateOfBirth",
      "gender",
    ]);

    if (missingField) {
      return NextResponse.json(
        { success: false, error: `${missingField} is required` },
        { status: 400 },
      );
    }

    // 3. Additional format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    // 4. Prepare user profile matching your Firebase schema
    const userProfile = {
      personalProfile: {
        fname: firstName,
        lname: lastName,
        age: dateOfBirth,
        gender,
        phone,
        selectedImage: avatar || "",
        bloodGroup: "",
        diastole: null,
        genotype: "",
        height: "",
        systole: null,
        weight: "",
        sosOneName: "",
        sosOnePhone: "",
        sosTwoName: "",
        sosTwoPhone: "",
      },
      medicalProfile: {
        allergies: "",
        asthma: false,
        diabetic: false,
        heartDisease: false,
        hypertension: false,
        smoker: false,
        ulcer: false,
      },
      drugSessions: {},
      familyAndFriends: [],
      encryptedFCMToken: "",
      subscription: {
        plan: selectedPlan,
        startDate: new Date().toISOString(),
        status: "active",
      },
    };

    // 5. Save to Realtime Database under doza/users/{uid}
    try {
      const userRef = ref(db, `doza/users/${uid}`);
      await set(userRef, userProfile);
      console.log("✅ User profile saved to database at doza/users/", uid);
    } catch (dbError: any) {
      console.error("❌ Database save failed:", dbError);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to save user data. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      uid,
      message: "User profile created successfully",
    });
  } catch (error: any) {
    console.error("❌ Registration error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Registration failed" },
      { status: 500 },
    );
  }
}
