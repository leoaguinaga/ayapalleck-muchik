import { z } from "zod"

export const formAddBookingSchema = z.object({
    customer: z.string().min(1, "Debe seleccionar un cliente"),
    dateStart: z.date().refine((date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
    }, {
        message: "La fecha de entrada debe ser hoy o una fecha futura",
    }),
    dateEnd: z.date(),
    paymentMethod: z.string().min(1, "Debe seleccionar un método de pago"),
    taxiCharges: z.number().min(0).optional()
}).refine((data) => data.dateEnd > data.dateStart, {
    message: "La fecha de salida debe ser posterior a la fecha de entrada",
    path: ["dateEnd"],
})