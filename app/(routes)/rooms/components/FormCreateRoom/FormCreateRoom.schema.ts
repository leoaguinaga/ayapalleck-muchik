import { z } from "zod"

export const formCreateRoomSchema = z.object({
    number: z.string().min(2, {
        message: "El nombre tebe contener por lo menos 2 caracteres.",
    }),
    roomType: z.string()
})