import { z } from "zod"

export const movementSchema = z.object({
    quantity: z.number().min(1, { message: "La cantidad debe ser mayor a 0" }),
    reason: z.string().min(3, { message: "La razón debe tener al menos 3 caracteres" }),
    notes: z.string().optional(),
})
