// app/api/user/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "@/app/utils/firebaseConfig";
import logger from "@/app/utils/logger";

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
    const {
      uid,
      personalInfo,
      selectedPlan,
      agreedToTerms,
      role = "user",
    } = body;

    // Log registration attempt (sensitive fields are redacted automatically)
    logger.info(
      { uid, email: personalInfo?.email, selectedPlan, role },
      "Registration attempt",
    );

    // 1. Validate required fields
    if (!uid) {
      logger.warn("Missing UID");
      return NextResponse.json(
        { success: false, error: "User UID is required" },
        { status: 400 },
      );
    }
    if (!personalInfo || !selectedPlan || !agreedToTerms) {
      logger.warn("Missing required sections");
      return NextResponse.json(
        { success: false, error: "Missing required sections" },
        { status: 400 },
      );
    }

    // Validate role
    if (!["user", "medic", "center"].includes(role)) {
      logger.warn({ role }, "Invalid role");
      return NextResponse.json(
        { success: false, error: "Invalid role" },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, phone, dateOfBirth, gender, avatar } =
      personalInfo;

    // 2. Validate personal fields
    const missingField = validateRequired(personalInfo, [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dateOfBirth",
      "gender",
    ]);

    if (missingField) {
      logger.warn({ missingField }, "Missing personal field");
      return NextResponse.json(
        { success: false, error: `${missingField} is required` },
        { status: 400 },
      );
    }

    // 3. Additional email format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      logger.warn({ email }, "Invalid email format");
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    // 4. Prepare user profile
    const userProfile = {
      role,
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

    // 5. Save to Realtime Database
    try {
      const userRef = ref(db, `doza/users/${uid}`);
      await set(userRef, userProfile);
      logger.info({ uid }, "User profile saved successfully");
    } catch (dbError: any) {
      logger.error({ err: dbError, uid }, "Database save failed");
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
    // Log the full error (redaction will hide sensitive fields)
    logger.error({ err: error }, "Registration error");
    return NextResponse.json(
      { success: false, error: error.message || "Registration failed" },
      { status: 500 },
    );
  }
}
