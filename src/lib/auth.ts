// lib/auth.ts
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  
  // NOTE: You must configure a database here to store users!
  // Example for Prisma:
  // database: prismaAdapter(prisma, { provider: "postgresql" }),

  plugins: [nextCookies()] // Make sure this is the last plugin in the array
});