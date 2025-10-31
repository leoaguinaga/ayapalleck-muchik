import { z } from "zod"

export const formCreateCustomerSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre tebe contener por lo menos 2 caracteres.",
    }),
    documentType: z.enum(["DNI", "CE", "Pasaporte"]),
    documentNumber: z.string().min(8, {
        message: "El número del documento debe contener por lo menos 8 caracteres.",
    }),
    phoneNumber: z.string().min(9, {
        message: "El número de teléfono debe contener por lo menos 9 caracteres.",
    }),
    email: z.string().email({
        message: "El correo electrónico no es válido.",
    }).optional().or(z.literal('')),
    ruc: z.string().optional(),
    birthDate: z.date().refine((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        const monthDiff = today.getMonth() - date.getMonth();
        const dayDiff = today.getDate() - date.getDate();
        
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            return age - 1 >= 18;
        }
        return age >= 18;
    }, {
        message: "Debe ser mayor de 18 años.",
    })
})