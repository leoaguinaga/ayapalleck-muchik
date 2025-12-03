"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { formCreateRoomType } from "./CreateRoomTypeForm.schema";
import { CreateRoomTypeFormProps } from "./CreateRoomTypeForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
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
import { Textarea } from "../ui/textarea";
import { useCreateRoomType } from "@/hooks/room-types/useCreateRoomType";

export default function CreateRoomTypeForm(props: CreateRoomTypeFormProps) {
    const { setOpenModalCreateCustomer } = props;
    const router = useRouter();
    const { mutate: createRoomType, isPending } = useCreateRoomType();

    const defaultBirthDate = new Date();
    defaultBirthDate.setFullYear(defaultBirthDate.getFullYear() - 18);

    const form = useForm<z.infer<typeof formCreateRoomType>>({
        resolver: zodResolver(formCreateRoomType),
        mode: 'onChange',
        defaultValues: {
            name: '',
            price: 1,
            description: '',
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formCreateRoomType>) => {
        createRoomType(values, {
            onSuccess: () => {
                toast.success('Habitación creada con éxito');
                setOpenModalCreateCustomer(false);
                router.refresh();
            },
            onError: (error) => {
                toast.error('Error al crear la habitación');
                console.error(error);
            }
        });
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ej: Suite"
                                        maxLength={12}
                                        value={field.value}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
                                            if (value.length > 0) {
                                                value = value.charAt(0).toUpperCase() + value.slice(1);
                                            }
                                            field.onChange(value);
                                        }}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        ref={field.ref}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Precio por noche</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <p className="absolute top-[8.5px] left-2 text-sm">S/</p>
                                        <Input 
                                            type="number" 
                                            placeholder="Precio por noche" 
                                            className="pl-5.5"
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                                            onBlur={field.onBlur}
                                            name={field.name}
                                            ref={field.ref}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Descripción</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Ej: Habitación con cama de dos plazas King Size"
                                        maxLength={65}
                                        {...field}
                                        className="max-h-20"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={!isValid || isPending} className="w-full">
                    {isPending ? 'Registrando...' : 'Registrar'}
                </Button>
            </form>
        </Form>
    )
}
