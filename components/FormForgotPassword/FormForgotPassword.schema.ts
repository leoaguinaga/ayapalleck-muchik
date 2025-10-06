import { email, z } from "zod"

export const formForgotPasswordSchema = z.object({
    email: email(),
})