import { z } from "zod"

export const formRemoveProductSchema = z.object({
    confirmation: z.string()
})
