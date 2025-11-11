
"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'
import { Charge } from '../types'
import toast from 'react-hot-toast'

const addChargeSchema = z.object({
  type: z.string(),
  description: z.string().min(3, 'La descripción debe tener al menos 3 caracteres'),
  quantity: z.number().min(1, 'La cantidad debe ser mayor a 0'),
  unitPrice: z.number().min(0, 'El precio debe ser mayor o igual a 0'),
})

interface AddChargeDialogProps {
  onAddCharge: (type: Charge['type'], description: string, quantity: number, unitPrice: number, total: number) => void
}

export function AddChargeDialog({ onAddCharge }: AddChargeDialogProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof addChargeSchema>>({
    resolver: zodResolver(addChargeSchema),
    defaultValues: {
      type: 'extra',
      quantity: 1,
      unitPrice: 0,
    },
  })

  const quantity = form.watch('quantity')
  const unitPrice = form.watch('unitPrice')
  const total = quantity * unitPrice

  const onSubmit = (values: z.infer<typeof addChargeSchema>) => {
    onAddCharge(
      values.type,
      values.description,
      values.quantity,
      values.unitPrice,
      total
    )
    toast.success('Cargo agregado correctamente')
    setOpen(false)
    form.reset()
  }

  const chargeTypes = [
    { value: 'service', label: 'Servicio' },
    { value: 'taxi', label: 'Taxi' },
    { value: 'extra', label: 'Cargo extra' },
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Añadir cargo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Añadir cargo extra</DialogTitle>
          <DialogDescription>
            Registra un cargo adicional a la estadía (servicio, taxi, etc.)
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de cargo</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {chargeTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ej: Servicio de taxi al aeropuerto"
                      {...field}
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cantidad</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
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
                        min={0}
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Preview del cálculo */}
            <div className="rounded-lg bg-muted p-4 space-y-2">
              <h4 className="font-semibold text-sm">Resumen</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cantidad:</span>
                  <span>{quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Precio unitario:</span>
                  <span>S/ {unitPrice.toFixed(2)}</span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span className="text-primary">S/ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">
                Agregar cargo
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
