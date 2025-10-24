import { z } from "zod"

export const formCreateUserSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe contener por lo menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "El correo electrónico no es válido.",
    }),
    phone: z.string(),
    role: z.string(),
    shift: z.string(),
    password: z.string().min(6, {
        message: "La contraseña debe contener por lo menos 6 caracteres.",
    }),
})
