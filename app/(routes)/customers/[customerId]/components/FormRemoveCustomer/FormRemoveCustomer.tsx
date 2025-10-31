"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { formRemoveCustomerSchema } from "./FormRemoveCustomer.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

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
import toast from "react-hot-toast"

import { FormRemoveCustomerProps } from "./FormRemoveCustomer.types"

export default function FormRemoveCustomer(props: FormRemoveCustomerProps) {
  const { customerId, customerName } = props
  const router = useRouter()

  const form = useForm<z.infer<typeof formRemoveCustomerSchema>>({
    resolver: zodResolver(formRemoveCustomerSchema),
    defaultValues: {
      text: "",
    },
  })

  // estado para saber si el texto coincide
  const [isValid, setIsValid] = useState(false)

  // observar los cambios del input
  const watchedText = form.watch("text")

  useEffect(() => {
    setIsValid(watchedText === `eliminar/cliente-${customerId}`)
  }, [watchedText, customerId])

  const onSubmit = async (values: z.infer<typeof formRemoveCustomerSchema>) => {
    if (!isValid) return
    console.log(values)
    toast.success("Cliente eliminado con éxito")
    router.push("/customers")
    router.refresh()
  }

  return (
    <div className="flex flex-col w-full my-2.5">
      <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold">Eliminar cliente</h2>
        <p className="text-sm text-muted-foreground">
          Para garantizar la integridad de los datos, el cliente se marcará como "desactivado" y no se mostrará en el sistema.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-3 w-full"
        >
          <div className="grid grid-cols-1">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-500 dark:text-red-600">
                    Para continuar, escribe "eliminar/cliente-{customerId}"
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="" 
                      {...field} 
                      id="text" 
                      className="text-red-500 dark:text-red-600 border-red-500 dark:border-red-600 bg-white" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={!isValid}
            className="w-full bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-500 dark:text-white"
          >
            Eliminar
          </Button>
        </form>
      </Form>
    </div>
  )
}
