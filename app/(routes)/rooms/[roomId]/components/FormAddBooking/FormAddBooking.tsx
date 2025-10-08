"use client"

import { useRouter } from "next/navigation";
import { FormAddBookingProps } from "./FormAddBooking.types";
import { useForm } from "react-hook-form";
import { formAddBookingSchema } from "./FormAddBooking.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import toast from 'react-hot-toast';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function FormCreateCustomer(props: FormAddBookingProps) {
    const { setOpenModalAddBooking } = props;
    const router = useRouter();

    const defaultBirthDate = new Date();
    defaultBirthDate.setFullYear(defaultBirthDate.getFullYear() - 18);

    const form = useForm<z.infer<typeof formAddBookingSchema>>({
        resolver: zodResolver(formAddBookingSchema),
        defaultValues: {
            customer: '',
            dateStart: '',
            dateEnd: '',
            paymentMethod: '',
            taxiCharges: 0
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formAddBookingSchema>) => {
        console.log(values);
        toast.success('Reservación creada con éxito');
        setOpenModalAddBooking(false);
        router.refresh();
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="customer"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Selecciona el cliente</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona el cliente" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="juanperez">Juna Peres</SelectItem>
                                            <SelectItem value="mariagarcia">Maria Garcia</SelectItem>
                                            <SelectItem value="carlossanchez">Carlos Sanchez</SelectItem>
                                            <SelectItem value="anafernandez">Ana Fernandez</SelectItem>
                                            <SelectItem value="luisrodriguez">Luis Rodriguez</SelectItem>
                                            <SelectItem value="sofiagonzalez">Sofia Gonzalez</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateStart"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Fecha de entrada</FormLabel>
                                <FormControl>
                                    <Input type="date" placeholder="Fecha de inicio" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateEnd"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Fecha de salida</FormLabel>
                                <FormControl>
                                    <Input type="date" placeholder="Fecha de fin" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Método de pago</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona el método de pago" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="efectivo">Efectivo</SelectItem>
                                            <SelectItem value="tarjeta">Tarjeta</SelectItem>
                                            <SelectItem value="transferencia">Transferencia</SelectItem>
                                            <SelectItem value="paypal">PayPal</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="taxiCharges"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Cargos de taxi (opcional)</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Cargos de taxi" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={!isValid} className="w-full">Agregar</Button>
            </form>
        </Form>
    )
}
