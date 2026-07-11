// lib/api-helpers.ts
import { NextResponse } from "next/server";
import logger from "./logger";

export function handleError(error: unknown, message = "Something went wrong") {
  logger.error(error, message);
  return NextResponse.json({ success: false, error: message }, { status: 500 });
}
