import { z } from "zod"

export const formCreateRoomSchema = z.object({
    roomNumber: z.string().min(2, {
        message: "El número debe contener por lo menos 2 caracteres.",
    }),
    roomType: z.string().min(1, {
        message: "Debes seleccionar un tipo de habitación.",
    })
})