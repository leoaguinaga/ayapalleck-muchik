"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { formUpdateRoomSchema } from "./FormUpdateRoom.schema";
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

export default function FormCreateCustomer() {
  const router = useRouter();

  const defaultBirthDate = new Date();
  defaultBirthDate.setFullYear(defaultBirthDate.getFullYear() - 18);

  const form = useForm<z.infer<typeof formUpdateRoomSchema>>({
    resolver: zodResolver(formUpdateRoomSchema),
    defaultValues: {
      number: '101',
      roomType: 'Doble',
    }
  })

  const { isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formUpdateRoomSchema>) => {
    console.log(values);
    toast.success('Habitación actualizada con éxito');
    router.refresh();
  }

  return (
    <div className="flex flex-col w-full my-2.5">
      <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold">Actualizar habitación</h2>
        <p className="text-sm text-muted-foreground">Ten en cuenta que los cambios realizados repercutirán en las futuras reservas en esta habitación, por lo que recomendamos tener cuidado al realizar estas modificaciones.</p>
      </div>
      <Form {...form}>


        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de habitación</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. 101" {...field} id="number" className="bg-white"/>
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
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Selecciona un tipo de documento" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
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
          <Button type="submit" disabled={!isValid} className="w-full cursor-pointer">Actualizar</Button>
        </form>
      </Form>
    </div>
  )
}
