// app/(registration)/type.ts
export interface UserRegistrationData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    gender: "Male" | "Female" | "";
    avatar: string;
  };
  referralCode: string;
  agreedToTerms: boolean;
  role: "user" | "medic" | "center";
}

export interface ReferralValidation {
  valid: boolean;
  code?: string;
  codeId?: string;
  rewardType?: "discount" | "points" | "cashback";
  rewardValue?: number;
  description?: string;
  assignedToType?: "center" | "medic" | "user";
  assignedToId?: string;
  assignedToName?: string;
  error?: string;
}

export const avatars = [
  "/assets/avatars/avatar-female-one.jpg",
  "/assets/avatars/avatar-user1.png",
  "/assets/avatars/avatar_kid.jpg",
  "/assets/avatars/avatar_adult.jpg",
  "/assets/avatars/happy_emoji.jpg",
  "/assets/avatars/not_sure_emoji.jpg",
  "/assets/avatars/avatar_elderly.jpg",
  "/assets/avatars/avatar.jpg",
  "/assets/avatars/avatar_adult_transparent.png",
  "/assets/avatars/avatar_lady.jpg",
  "/assets/avatars/good_emoji.jpg",
  "/assets/avatars/ok_emoji.jpg",
  "/assets/avatars/sad_emoji.jpg",
];
