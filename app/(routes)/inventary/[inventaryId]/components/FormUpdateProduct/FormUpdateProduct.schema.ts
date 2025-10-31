import { z } from "zod"

export const formUpdateProductSchema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    category: z.string(),
    minStock: z.number().min(0, "El stock mínimo debe ser mayor o igual a 0"),
    unitPrice: z.number().min(0, "El precio debe ser mayor o igual a 0"),
    unit: z.string().min(1, "La unidad de medida es requerida"),
    description: z.string().optional()
})
