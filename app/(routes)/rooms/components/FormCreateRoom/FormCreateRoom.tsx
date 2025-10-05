"use client"

import { useRouter } from "next/navigation";
import { FormCreateRoomProps } from "./FormCreateRoom.types"
import { useForm } from "react-hook-form";
import { formCreateRoomSchema } from "./FormCreateRoom.schema";
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

export default function FormCreateCustomer(props: FormCreateRoomProps) {
    const { setOpenModalCreateCustomer } = props;
    const router = useRouter();

    const defaultBirthDate = new Date();
    defaultBirthDate.setFullYear(defaultBirthDate.getFullYear() - 18);

    const form = useForm<z.infer<typeof formCreateRoomSchema>>({
        resolver: zodResolver(formCreateRoomSchema),
        defaultValues: {
            number: '',
            roomType: '',
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formCreateRoomSchema>) => {
        console.log(values);
        toast.success('Habitación creada con éxito');
        setOpenModalCreateCustomer(false);
        router.refresh();
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número de habitación</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. 101" {...field} id="number" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="roomType"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Tipo de habitación</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona un tipo de documento" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Simple">Simple</SelectItem>
                                            <SelectItem value="Doble">Doble</SelectItem>
                                            <SelectItem value="Matrimonial">Matrimonial</SelectItem>
                                            <SelectItem value="Queen">Queen</SelectItem>
                                            <SelectItem value="King">King</SelectItem>
                                        </SelectContent>
                                    </Select>
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
