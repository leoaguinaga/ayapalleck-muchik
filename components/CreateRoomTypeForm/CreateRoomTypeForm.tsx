"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { formCreateRoomType } from "./CreateRoomTypeForm.schema";
import { CreateRoomTypeFormProps } from "./CreateRoomTypeForm.types";
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
import { Textarea } from "../ui/textarea";

export default function CreateRoomTypeForm(props: CreateRoomTypeFormProps) {
    const { setOpenModalCreateCustomer } = props;
    const router = useRouter();

    const defaultBirthDate = new Date();
    defaultBirthDate.setFullYear(defaultBirthDate.getFullYear() - 18);

    const form = useForm<z.infer<typeof formCreateRoomType>>({
        resolver: zodResolver(formCreateRoomType),
        defaultValues: {
            name: '',
            price: 0,
            description: '',
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formCreateRoomType>) => {
        console.log(values);
        toast.success('Habitación creada con éxito');
        setOpenModalCreateCustomer(false);
        router.refresh();
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
                                    <Input placeholder="Ej: Suite" {...field} />
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
                                        <Input type="number" placeholder="Precio por noche" {...field} className="pl-5.5" />
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
                                    <Textarea placeholder="Ej: Habitación con cama de dos plazas King Size" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={!isValid} className="w-full">Registrar</Button>
            </form>
        </Form>
    )
}
