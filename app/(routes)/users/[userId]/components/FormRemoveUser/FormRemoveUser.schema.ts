import { z } from "zod"

export const formRemoveUserSchema = z.object({
    text: z.string(),
})
