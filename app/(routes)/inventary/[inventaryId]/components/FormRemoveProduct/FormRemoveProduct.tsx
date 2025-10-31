"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formRemoveProductSchema } from "./FormRemoveProduct.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import toast from 'react-hot-toast'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormRemoveProductProps } from "./FormRemoveProduct.types"
import { AlertTriangle } from "lucide-react"

export default function FormRemoveProduct(props: FormRemoveProductProps) {
  const { productId, productName } = props
  const router = useRouter()

  const form = useForm<z.infer<typeof formRemoveProductSchema>>({
    resolver: zodResolver(formRemoveProductSchema),
    defaultValues: {
      confirmation: ''
    }
  })

  const confirmationText = `eliminar/producto-${productId}`
  const watchConfirmation = form.watch("confirmation")
  const isConfirmationValid = watchConfirmation === confirmationText

  const onSubmit = async (values: z.infer<typeof formRemoveProductSchema>) => {
    if (!isConfirmationValid) {
      toast.error('El texto de confirmación no coincide')
      return
    }

    console.log('Eliminar producto:', productId)
    toast.success('Producto eliminado con éxito')
    
    // Aquí redireccionar después de eliminar
    router.push('/inventary')
  }

  return (
    <div className="flex flex-col w-full my-2.5">
      <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold flex items-center gap-2">
          <AlertTriangle className="size-5 text-orange-600" />
          Eliminar producto
        </h2>
        <p className="text-sm text-muted-foreground">
          Esta acción es permanente y eliminará el producto y todo su historial de movimientos.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3 w-full">
          <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-md p-3">
            <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
              Producto a eliminar:
            </p>
            <p className="text-sm font-bold text-orange-900 dark:text-orange-100">
              {productName} (ID: {productId})
            </p>
          </div>
          
          <FormField
            control={form.control}
            name="confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar eliminación</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={confirmationText}
                    {...field}
                    className="bg-white dark:bg-background font-mono text-sm"
                  />
                </FormControl>
                <FormDescription>
                  Escribe <span className="font-mono font-semibold">{confirmationText}</span> para confirmar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="submit"
              variant="destructive"
              disabled={!isConfirmationValid}
            >
              Eliminar producto permanentemente
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
