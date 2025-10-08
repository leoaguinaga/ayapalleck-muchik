import { z } from "zod"

export const formRemoveRoomSchema = z.object({
    text: z.string()
})