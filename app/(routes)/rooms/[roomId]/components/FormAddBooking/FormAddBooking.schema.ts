import { z } from "zod"

export const formAddBookingSchema = z.object({
    customer: z.string(),
    dateStart: z.string(),
    dateEnd: z.string(),
    paymentMethod: z.string(),
    taxiCharges: z.number().min(0).optional()
})