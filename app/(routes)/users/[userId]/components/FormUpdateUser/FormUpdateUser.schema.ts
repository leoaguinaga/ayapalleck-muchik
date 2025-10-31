import { z } from "zod"

export const formUpdateUserSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    email: z.string().email({ message: "Debe ser un correo válido" }),
    phone: z.string().min(9, { message: "El teléfono debe tener al menos 9 dígitos" }),
    role: z.string().min(1, { message: "Debe seleccionar un rol" }),
})
