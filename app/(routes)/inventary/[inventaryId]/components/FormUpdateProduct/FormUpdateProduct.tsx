"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { formUpdateProductSchema } from "./FormUpdateProduct.schema"
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
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormUpdateProductProps } from "./FormUpdateProduct.types"

export default function FormUpdateProduct(props: FormUpdateProductProps) {
  const { productId, defaultValues } = props
  const router = useRouter()

  const form = useForm<z.infer<typeof formUpdateProductSchema>>({
    resolver: zodResolver(formUpdateProductSchema),
    defaultValues: {
      name: defaultValues.name,
      category: defaultValues.category,
      minStock: defaultValues.minStock,
      unitPrice: defaultValues.unitPrice,
      unit: defaultValues.unit,
      description: defaultValues.description || ''
    }
  })

  const { isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formUpdateProductSchema>) => {
    console.log(values)
    toast.success('Producto actualizado con éxito')
    router.refresh()
  }

  return (
    <div className="flex flex-col w-full my-2.5">
      <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold">Actualizar producto</h2>
        <p className="text-sm text-muted-foreground">
          Actualiza la información del producto. Los cambios afectarán el inventario inmediatamente.
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
                  <FormLabel>Nombre del producto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Coca Cola 500ml" {...field} className="bg-white dark:bg-background"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white dark:bg-background">
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Venta">Venta</SelectItem>
                      <SelectItem value="Almacén">Almacén</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minStock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock mínimo</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      className="bg-white dark:bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unitPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio unitario (S/)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      className="bg-white dark:bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unidad de medida</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. unidad, paquete, caja" {...field} className="bg-white dark:bg-background"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción (Opcional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descripción del producto..."
                    className="resize-none bg-white dark:bg-background"
                    rows={2}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2 pt-2">
            <Button type="submit" disabled={!isValid}>
              Actualizar producto
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
