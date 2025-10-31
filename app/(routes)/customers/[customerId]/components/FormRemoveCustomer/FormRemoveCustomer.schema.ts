import { z } from "zod"

export const formRemoveCustomerSchema = z.object({
    text: z.string(),
})
