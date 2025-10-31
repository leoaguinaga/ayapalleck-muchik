"use client"

import { useRouter } from "next/navigation"
import { FormCreateProductProps } from "./FormCreateProduct.types"
import { useForm } from "react-hook-form"
import { formCreateProductSchema } from "./FormCreateProduct.schema"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function FormCreateProduct(props: FormCreateProductProps) {
    const { setOpenModalCreateProduct } = props
    const router = useRouter()

    const form = useForm<z.infer<typeof formCreateProductSchema>>({
        resolver: zodResolver(formCreateProductSchema),
        defaultValues: {
            name: '',
            category: '',
            stock: 0,
            minStock: 0,
            unitPrice: 0,
            unit: 'unidad',
            description: '',
        }
    })

    const { isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof formCreateProductSchema>) => {
        console.log(values)
        toast.success('Producto creado exitosamente')
        setOpenModalCreateProduct(false)
        router.refresh()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre del producto</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. Coca Cola 500ml" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Categoría</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl className="w-full">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una categoría" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="w-full">
                                        <SelectItem value="Venta">Venta (Gaseosas, galletas, etc.)</SelectItem>
                                        <SelectItem value="Almacén">Almacén (Toallas, almohadas, etc.)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="stock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Stock inicial</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="minStock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                    <p>Stock mínimo</p>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="size-3.5" />
                                        </TooltipTrigger>
                                        <TooltipContent side="top">
                                            <p>Cantidad mínima en inventario antes de generar una alerta</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
                                <FormLabel>Precio unitario (S/.)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        placeholder="0.00"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
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
                            <FormItem className="w-full">
                                <FormLabel>Unidad de medida</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl className="w-full">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una unidad" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="w-full">
                                        <SelectItem value="unidad">Unidad</SelectItem>
                                        <SelectItem value="paquete">Paquete</SelectItem>
                                        <SelectItem value="caja">Caja</SelectItem>
                                        <SelectItem value="juego">Juego</SelectItem>
                                        <SelectItem value="rollo">Rollo</SelectItem>
                                        <SelectItem value="litro">Litro</SelectItem>
                                        <SelectItem value="kilogramo">Kilogramo</SelectItem>
                                    </SelectContent>
                                </Select>
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
                                    placeholder="Agrega una descripción del producto..."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end gap-2 pt-2">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setOpenModalCreateProduct(false)}
                    >
                        Cancelar
                    </Button>
                    <Button type="submit" disabled={!isValid}>
                        Crear Producto
                    </Button>
                </div>
            </form>
        </Form>
    )
}
