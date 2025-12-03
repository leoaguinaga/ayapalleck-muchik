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
import { useRoomTypes } from "@/hooks/room-types/useRoomTypes";
import { useCreateRoom } from "@/hooks/rooms/useCreateRoom";
import { Skeleton } from "@/components/ui/skeleton";

export default function FormCreateCustomer(props: FormCreateRoomProps) {
    const { setOpenModalCreateCustomer } = props;
    const router = useRouter();
    
    const { data: roomTypes, isLoading: isLoadingRoomTypes } = useRoomTypes();
    const { mutate: createRoom, isPending } = useCreateRoom();

    const form = useForm<z.infer<typeof formCreateRoomSchema>>({
        resolver: zodResolver(formCreateRoomSchema),
        mode: 'onChange',
        defaultValues: {
            number: '',
            roomType: '',
        }
    })

    const { isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formCreateRoomSchema>) => {
        createRoom(
            {
                number: values.number,
                roomTypeId: values.roomType,
                status: 'AVAILABLE',
            },
            {
                onSuccess: () => {
                    toast.success('Habitación creada con éxito');
                    setOpenModalCreateCustomer(false);
                    router.refresh();
                },
                onError: (error) => {
                    toast.error('Error al crear la habitación');
                    console.error(error);
                },
            }
        );
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
                                    {isLoadingRoomTypes ? (
                                        <Skeleton className="h-10 w-full" />
                                    ) : (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecciona un tipo de habitación" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {roomTypes?.map((roomType) => (
                                                    <SelectItem key={roomType.id} value={roomType.id}>
                                                        {roomType.name} - S/{roomType.price}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={!isValid || isPending} className="w-full">
                    {isPending ? 'Agregando...' : 'Agregar'}
                </Button>
            </form>
        </Form>
    )
}
