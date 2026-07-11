// lib/logger.ts
import pino from "pino";

class Logger {
  private static instance: pino.Logger;

  private constructor() {}

  public static getInstance(): pino.Logger {
    if (!Logger.instance) {
      const isProduction = process.env.NODE_ENV === "production";
      Logger.instance = pino({
        level: isProduction ? "info" : "debug",
        redact: [
          "req.headers.authorization",
          "email",
          "phone",
          "password",
          "confirmPassword",
        ],
        transport: !isProduction
          ? {
              target: "pino-pretty",
              options: { colorize: true },
            }
          : undefined,
      });
    }
    return Logger.instance;
  }
}

export default Logger.getInstance();
