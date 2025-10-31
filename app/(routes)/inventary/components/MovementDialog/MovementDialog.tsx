"use client"

import { useRouter } from "next/navigation"
import { MovementDialogProps } from "./MovementDialog.types"
import { useForm } from "react-hook-form"
import { movementSchema } from "./MovementDialog.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import toast from 'react-hot-toast'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
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
import { ArrowDownCircle, ArrowUpCircle, ChevronRight } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function MovementDialog(props: MovementDialogProps) {
    const { productId, productName, currentStock, unit, type, open, onOpenChange } = props
    const router = useRouter()

    const form = useForm<z.infer<typeof movementSchema>>({
        resolver: zodResolver(movementSchema),
        defaultValues: {
            quantity: 0,
            reason: '',
            notes: '',
        }
    })

    const { isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof movementSchema>) => {
        console.log({
            productId,
            type,
            ...values
        })

        toast.success(`${type} registrada exitosamente`)
        onOpenChange(false)
        form.reset()
        router.refresh()
    }

    const reasonOptions = type === "Entrada"
        ? [
            "Compra a proveedor",
            "Reposición de stock",
            "Devolución",
            "Donación",
            "Otro"
        ]
        : [
            "Venta a huéspedes",
            "Asignación a habitaciones",
            "Limpieza de habitaciones",
            "Reemplazo por desgaste",
            "Pérdida o robo",
            "Otro"
        ]

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 font-bold">
                        {type === "Entrada" ? (
                            <ArrowDownCircle className="size-5 text-green-600" />
                        ) : (
                            <ArrowUpCircle className="size-5 text-orange-600" />
                        )}
                        <p>Registrar {type}</p>
                        <ChevronRight className="size-4.5" />
                        <p className="truncate">{productName}</p>
                    </DialogTitle>
                    <DialogDescription className="text-left">
                        Stock actual: <span className="font-semibold">{currentStock} {unit}</span>
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <div className="w-full flex flex-col sm:flex-row gap-2">
                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Cantidad</FormLabel>
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
                                name="reason"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Razón del movimiento</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl className="w-full">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecciona una razón" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="w-full">
                                                {reasonOptions.map((option) => (
                                                    <SelectItem key={option} value={option}>
                                                        {option}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Notas adicionales (Opcional)</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Agrega detalles adicionales..."
                                            className="resize-none"
                                            rows={3}
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
                                onClick={() => {
                                    onOpenChange(false)
                                    form.reset()
                                }}
                            >
                                Cancelar
                            </Button>
                            <Button type="submit" disabled={!isValid}>
                                Registrar {type}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
