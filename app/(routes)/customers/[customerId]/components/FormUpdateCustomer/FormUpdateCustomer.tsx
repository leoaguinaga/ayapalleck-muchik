"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formUpdateCustomerSchema } from "./FormUpdateCustomer.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import toast from 'react-hot-toast'

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
import { FormUpdateCustomerProps } from "./FormUpdateCustomer.types"

export default function FormUpdateCustomer(props: FormUpdateCustomerProps) {
  const { customerId } = props
  const router = useRouter()

  const form = useForm<z.infer<typeof formUpdateCustomerSchema>>({
    resolver: zodResolver(formUpdateCustomerSchema),
    defaultValues: {
      name: 'Juan Pérez García',
      email: 'juan.perez@gmail.com',
      phone: '987654321',
      ruc: '20123456789',
    }
  })

  const { isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formUpdateCustomerSchema>) => {
    console.log(values)
    toast.success('Cliente actualizado con éxito')
    router.refresh()
  }

  return (
    <div className="flex flex-col w-full my-2.5">
      <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold">Actualizar cliente</h2>
        <p className="text-sm text-muted-foreground">
          Actualiza la información del cliente. Los cambios se reflejarán en todas sus reservas futuras.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Juan Pérez" {...field} id="name" className="bg-white"/>
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
                    <Input placeholder="Ej. juan@gmail.com" {...field} id="email" type="email" className="bg-white"/>
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
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. 987654321" {...field} id="phone" className="bg-white"/>
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
                  <FormLabel>RUC (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. 20123456789" {...field} id="ruc" className="bg-white"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={!isValid} className="w-full cursor-pointer">
            Actualizar
          </Button>
        </form>
      </Form>
    </div>
  )
}
