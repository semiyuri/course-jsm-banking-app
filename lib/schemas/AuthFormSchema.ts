import { AuthFormType } from "@/types/enums";
import { z } from "zod";

export const AuthFormSchema = (type: AuthFormType) =>
  z.object({
    firstName:
      type === AuthFormType.SignIn ? z.string().optional() : z.string().min(3),
    lastName:
      type === AuthFormType.SignIn ? z.string().optional() : z.string().min(3),
    address:
      type === AuthFormType.SignIn ? z.string().optional() : z.string().max(50),
    city:
      type === AuthFormType.SignIn ? z.string().optional() : z.string().max(50),
    state:
      type === AuthFormType.SignIn
        ? z.string().optional()
        : z.string().min(2).max(2),
    postalCode:
      type === AuthFormType.SignIn
        ? z.string().optional()
        : z.string().min(3).max(6),
    dateOfBirth:
      type === AuthFormType.SignIn ? z.string().optional() : z.string().min(3),
    ssn:
      type === AuthFormType.SignIn ? z.string().optional() : z.string().min(3),

    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
