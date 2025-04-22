import { z } from "zod";

export const MessageFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
  .string()
  .regex(
    /^\+?[1-9]\d{1,14}$/,
    "Phone number must be in international format (e.g., +2348012345678)"
  )
  .min(5, "Phone number must be at least 5 digits long.")
  .max(15, "Phone number cannot be longer than 15 digits."),
  companyName: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type TMessageFormSchema = z.infer<typeof MessageFormSchema>
