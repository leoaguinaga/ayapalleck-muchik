import { z } from "zod"

export const formCheckInSchema = z.object({
  guestId: z.string().min(1, "Selecciona un huésped"),
  duration: z.string().min(1, "Indica la duración de la estadía"),
  discount: z.number().min(0).optional(),
  reservationType: z.enum(["Por noche", "Por horas"]),
  taxiFee: z.number().min(0).optional(),
  advance: z.number().min(0).optional(),
  extras: z.array(z.object({
    productId: z.string(),
    productName: z.string(),
    price: z.number(),
    quantity: z.number().min(1)
  })).optional()
})
