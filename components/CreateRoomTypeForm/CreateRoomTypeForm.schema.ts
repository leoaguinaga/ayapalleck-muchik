import { z } from "zod"

export const formCreateRoomType = z.object({
    name: z.string().min(2, { message: "El nombre debe tener 2 caracteres" }),
    price: z.number().min(1, { message: "El precio debe ser mayor a 0" }),
    description: z.string().min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
})