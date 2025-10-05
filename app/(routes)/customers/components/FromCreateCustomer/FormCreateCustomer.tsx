"use client"

import { useRouter } from "next/navigation";
import { FormCreateCustomerProps } from "./FormCreateCustomer.types"
import { useForm } from "react-hook-form";
import { formCreateCustomerSchema } from "./FormCreateCustomer.schema";
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

export default function FormCreateCustomer(props: FormCreateCustomerProps) {
    const { setOpenModalCreateCustomer } = props;
    const router = useRouter();

    const defaultBirthDate = new Date();
    defaultBirthDate.setFullYear(defaultBirthDate.getFullYear() - 18);

    const form = useForm<z.infer<typeof formCreateCustomerSchema>>({
        resolver: zodResolver(formCreateCustomerSchema),
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            documentType: 'DNI',
            documentNumber: '',
            birthDate: defaultBirthDate,
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formCreateCustomerSchema>) => {
        console.log(values);
        setOpenModalCreateCustomer(false);
        router.refresh();
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
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo electrónico</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. ayapalleck.muchik@gmail.com" {...field} type="email" id="email" />
                                </FormControl>
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
                    <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fecha de nacimiento</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ej. 987123234"
                                        type="date"
                                        id="birthDate"
                                        value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : ''}
                                        onChange={(e) => field.onChange(new Date(e.target.value))}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                    />
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
