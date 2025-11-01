import { z } from "zod"

export const createBookingSchema = z.object({
  guestId: z.string().min(1, "Selecciona un huésped"),
  roomNumber: z.string().min(1, "Número de habitación requerido"),
  checkIn: z.string().min(1, "Fecha de entrada requerida"),
  checkOut: z.string().min(1, "Fecha de salida requerida"),
  reservationType: z.enum(["Por noche", "Por horas"]),
  duration: z.string().optional(),
  discount: z.number().min(0).optional(),
  taxiFee: z.number().min(0).optional(),
  advance: z.number().min(0).optional(),
  notes: z.string().optional()
}).refine((data) => {
  if (data.checkOut <= data.checkIn) {
    return false
  }
  return true
}, {
  message: "La fecha de salida debe ser posterior a la fecha de entrada",
  path: ["checkOut"]
})
