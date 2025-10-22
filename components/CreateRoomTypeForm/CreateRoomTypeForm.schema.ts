import { z } from "zod"

export const formCreateRoomType = z.object({
    name: z.string().min(2),
    price: z.number(),
    description: z.string().min(10)
})