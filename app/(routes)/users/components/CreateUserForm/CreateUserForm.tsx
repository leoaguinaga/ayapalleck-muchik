"use client"

import { useRouter } from "next/navigation";
import { FormCreateUserProps } from "./CreateUserForm.types"
import { useForm } from "react-hook-form";
import { formCreateUserSchema } from "./CreateUserForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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

export default function FormCreateUser(props: FormCreateUserProps) {
    const { setOpenModalCreateUser } = props;
    const router = useRouter();

    const form = useForm<z.infer<typeof formCreateUserSchema>>({
        resolver: zodResolver(formCreateUserSchema),
        defaultValues: {
            name: '',
            email: '',
            role: 'Recepcionista',
            phone: '',
            shift: 'morning',
            password: '',
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formCreateUserSchema>) => {
        console.log(values);
        setOpenModalCreateUser(false);
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
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número de teléfono</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. 960 606 442" {...field} id="phone" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shift"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Turno</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona un turno" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="morning">Mañana</SelectItem>
                                            <SelectItem value="late">Tarde</SelectItem>
                                            <SelectItem value="night">Noche</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Rol</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona un rol" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Administrador">Administrador</SelectItem>
                                            <SelectItem value="Recepcionista">Recepcionista</SelectItem>
                                            <SelectItem value="Limpieza">Limpieza</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                                    <Input placeholder="Ej. usuario@hotel.com" {...field} type="email" id="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input placeholder="Mínimo 6 caracteres" {...field} type="password" id="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={!isValid} className="w-full">Agregar Usuario</Button>
            </form>
        </Form>
    )
}
