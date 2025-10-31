"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formUpdateUserSchema } from "./FormUpdateUser.schema"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormUpdateUserProps } from "./FormUpdateUser.types"

export default function FormUpdateUser(props: FormUpdateUserProps) {
  const { userId, defaultValues } = props
  const router = useRouter()

  const form = useForm<z.infer<typeof formUpdateUserSchema>>({
    resolver: zodResolver(formUpdateUserSchema),
    defaultValues: defaultValues
  })

  const { isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formUpdateUserSchema>) => {
    console.log(values)
    toast.success('Usuario actualizado con éxito')
    router.refresh()
  }

  return (
    <div className="flex flex-col w-full my-2.5">
      <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold">Actualizar usuario</h2>
        <p className="text-sm text-muted-foreground">
          Los cambios en el rol y permisos del usuario afectarán inmediatamente su acceso al sistema.
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
                    <Input placeholder="Ej. Juan Pérez" {...field} className="bg-white dark:bg-background"/>
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
                    <Input type="email" placeholder="ejemplo@correo.com" {...field} className="bg-white dark:bg-background"/>
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
                    <Input placeholder="987654321" {...field} className="bg-white dark:bg-background"/>
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full bg-white dark:bg-background">
                        <SelectValue placeholder="Selecciona un rol" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-background">
                        <SelectItem value="Administrador">Administrador</SelectItem>
                        <SelectItem value="Recepcionista">Recepcionista</SelectItem>
                        <SelectItem value="Limpieza">Limpieza</SelectItem>
                        <SelectItem value="Mantenimiento">Mantenimiento</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={!isValid} className="w-full cursor-pointer">
            Actualizar usuario
          </Button>
        </form>
      </Form>
    </div>
  )
}
