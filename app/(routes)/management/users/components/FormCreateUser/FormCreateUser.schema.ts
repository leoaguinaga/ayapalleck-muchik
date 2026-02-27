import { z } from "zod";

export const formCreateUserSchema = z.object({
  name: z.string().min(3, { message: "Mínimo 3 caracteres" }),
  email: z.string().email({ message: "Correo inválido" }),
  role: z.enum(["ADMIN", "RECEPTIONIST", "HOUSEKEEPING"]),
  phone: z.string().optional(),
  shift: z.enum(["MORNING", "AFTERNOON", "NIGHT"]),
  password: z.string().min(8, { message: "Mínimo 8 caracteres" }),
});
