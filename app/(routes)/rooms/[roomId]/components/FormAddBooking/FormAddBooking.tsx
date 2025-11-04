"use client"

import { useRouter } from "next/navigation";
import { FormAddBookingProps } from "./FormAddBooking.types";
import { useForm } from "react-hook-form";
import { formAddBookingSchema } from "./FormAddBooking.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { customersData } from "./FormAddBooking.data";
import { CustomerSelector } from "@/components/CustomerSelector";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import toast from 'react-hot-toast';
import { cn } from "@/lib/utils"

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

export default function FormCreateBooking(props: FormAddBookingProps) {
    const { setOpenModalAddBooking } = props;
    const router = useRouter();

    const form = useForm<z.infer<typeof formAddBookingSchema>>({
        resolver: zodResolver(formAddBookingSchema),
        defaultValues: {
            customer: '',
            dateStart: undefined,
            dateEnd: undefined,
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
                                <FormLabel>Selecciona el huésped</FormLabel>
                                <FormControl>
                                    <CustomerSelector
                                        value={field.value}
                                        onChange={field.onChange}
                                        customers={customersData}
                                        placeholder="Selecciona el cliente"
                                        searchPlaceholder="Buscar por nombre o documento..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateStart"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col">
                                <FormLabel>Fecha de entrada</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP", { locale: es })
                                                ) : (
                                                    <span>Selecciona la fecha</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) => {
                                                const today = new Date();
                                                today.setHours(0, 0, 0, 0);
                                                return date < today;
                                            }}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateEnd"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col">
                                <FormLabel>Fecha de salida</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP", { locale: es })
                                                ) : (
                                                    <span>Selecciona la fecha</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) => {
                                                const startDate = form.getValues("dateStart");
                                                if (startDate) {
                                                    return date <= startDate;
                                                }
                                                const today = new Date();
                                                today.setHours(0, 0, 0, 0);
                                                return date < today;
                                            }}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
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
