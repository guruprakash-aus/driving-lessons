import { Role } from "@prisma/client";
import { DefaultSession } from "next-auth";

// Just append the Role to the existing type from next-auth
declare module "next-auth" {
  interface Session {
    user?: {
      role?: Role;
    } & DefaultSession["user"];
  }

  interface User {
    role?: Role;
  }
}