import { z } from "astro/zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" }),
  lastName: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email(),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;
