import z from "zod";

const envSchema = z.object({
  OPENAI_API_KEY: z.string().trim().min(1),
  DATABASE_URL: z.string().trim().min(1),
  GOOGLE_CLIENT_ID: z.string().trim().min(1),
  GOOGLE_CLIENT_SECRET: z.string().trim().min(1),
  NEXTAUTH_URL: z.string().trim().min(1),
  NEXTAUTH_SECRET: z.string().trim().min(1),
  ADMIN_EMAILS: z.string().trim().min(1),
});

export const env = envSchema.parse(process.env);