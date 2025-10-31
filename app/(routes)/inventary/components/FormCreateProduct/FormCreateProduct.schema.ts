import { z } from "zod"

export const formCreateProductSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    category: z.string(),
    stock: z.number().min(0, { message: "El stock debe ser mayor o igual a 0" }),
    minStock: z.number().min(0, { message: "El stock mínimo debe ser mayor o igual a 0" }),
    unitPrice: z.number().min(0, { message: "El precio debe ser mayor a 0" }),
    unit: z.string().min(1, { message: "La unidad es requerida" }),
    description: z.string().optional(),
})
