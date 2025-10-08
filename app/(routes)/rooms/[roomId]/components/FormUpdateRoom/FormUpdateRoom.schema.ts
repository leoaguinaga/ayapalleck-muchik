import { z } from "zod"

export const formUpdateRoomSchema = z.object({
    number: z.string().min(2, {
        message: "El número tebe contener por lo menos 2 caracteres.",
    }),
    roomType: z.string()
})