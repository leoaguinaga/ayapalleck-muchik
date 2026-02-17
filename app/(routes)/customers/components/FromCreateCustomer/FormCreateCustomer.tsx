"use client"

import { useRouter } from "next/navigation";
import { FormCreateCustomerProps } from "./FormCreateCustomer.types"
import { useForm } from "react-hook-form";
import { formCreateCustomerSchema } from "./FormCreateCustomer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useCreateCustomer } from "@/hooks/customers";

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
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export default function FormCreateCustomer(props: FormCreateCustomerProps) {
    const { setOpenModalCreateCustomer } = props;
    const router = useRouter();
    const { mutate: createCustomer, isPending } = useCreateCustomer();

    const defaultBirthDate = new Date();
    defaultBirthDate.setFullYear(defaultBirthDate.getFullYear() - 18);

    const form = useForm<z.infer<typeof formCreateCustomerSchema>>({
        resolver: zodResolver(formCreateCustomerSchema),
        defaultValues: {
            name: '',
            email: '',
            ruc: '',
            phoneNumber: '',
            documentType: 'DNI',
            documentNumber: '',
            birthDate: defaultBirthDate,
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formCreateCustomerSchema>) => {
        const payload = {
            fullName: values.name,
            documentType: values.documentType,
            documentNumber: values.documentNumber,
            phone: values.phoneNumber,
            ...(values.email && { email: values.email }),
            ...(values.ruc && { ruc: values.ruc }),
            ...(values.birthDate && { birthDate: format(values.birthDate, 'yyyy-MM-dd') }),
        };
        
        console.log('Payload enviado:', JSON.stringify(payload, null, 2));
        console.log('API URL:', process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3333');
        
        createCustomer(payload, {
            onSuccess: () => {
                toast.success('Cliente creado exitosamente');
                setOpenModalCreateCustomer(false);
                form.reset();
            },
            onError: (error: any) => {
                console.error('Error completo:', error);
                console.error('Response:', error?.response);
                console.error('Response data:', error?.response?.data);
                console.error('Request:', error?.request);
                console.error('Message:', error?.message);
                
                const errorMessage = error?.response?.data?.message || error?.message || 'Error al crear el cliente';
                toast.error(errorMessage);
            }
        });
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre Completo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. Juan Pérez" {...field} id="name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Fecha de nacimiento</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP", { locale: es })
                                                ) : (
                                                    <span>Selecciona una fecha</span>
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
                                                const eighteenYearsAgo = new Date();
                                                eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
                                                return date > eighteenYearsAgo || date < new Date("1900-01-01");
                                            }}
                                            defaultMonth={defaultBirthDate}
                                            initialFocus
                                            captionLayout="dropdown"
                                            fromYear={1900}
                                            toYear={new Date().getFullYear() - 18}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="documentType"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Tipo de documento</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona un tipo de documento" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="DNI">DNI</SelectItem>
                                            <SelectItem value="Carnet de Extranjería">Carnet de Extranjería</SelectItem>
                                            <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="documentNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número de documento</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. 987123234" {...field} type="text" id="documentNumber" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo electrónico (Opcional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. ayapalleck.muchik@gmail.com" {...field} type="email" id="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ruc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número de RUC (Opcional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. 20123456789" {...field} type="text" id="ruc" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número de teléfono</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. 987123234" {...field} type="number" id="phoneNumber" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>
                <Button type="submit" disabled={!isValid || isPending} className="w-full">
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creando...
                        </>
                    ) : (
                        'Agregar'
                    )}
                </Button>
            </form>
        </Form>
    )
}
