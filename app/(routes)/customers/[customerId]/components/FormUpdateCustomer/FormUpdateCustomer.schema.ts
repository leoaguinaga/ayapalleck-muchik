import { z } from "zod"

export const formUpdateCustomerSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    email: z.string().email({ message: "Correo electrónico inválido" }).optional().or(z.literal('')),
    phone: z.string().min(9, { message: "El teléfono debe tener al menos 9 dígitos" }),
    ruc: z.string().optional().or(z.literal('')),
})
