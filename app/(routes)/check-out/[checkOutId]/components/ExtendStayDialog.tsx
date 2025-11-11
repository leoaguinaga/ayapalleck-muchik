
"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { format, differenceInDays, addDays } from 'date-fns'
import { es } from 'date-fns/locale'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, ArrowLeftRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'

const extendStaySchema = z.object({
  newCheckOut: z.date({}),
})

interface ExtendStayDialogProps {
  currentCheckOut: Date
  pricePerNight: number
  onExtend: (newCheckOut: Date, additionalNights: number, additionalCost: number) => void
}

export function ExtendStayDialog({ currentCheckOut, pricePerNight, onExtend }: ExtendStayDialogProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof extendStaySchema>>({
    resolver: zodResolver(extendStaySchema),
    defaultValues: {
      newCheckOut: addDays(currentCheckOut, 1),
    },
  })

  const newCheckOut = form.watch('newCheckOut')
  const additionalNights = newCheckOut ? differenceInDays(newCheckOut, currentCheckOut) : 0
  const additionalCost = additionalNights * pricePerNight

  const onSubmit = (values: z.infer<typeof extendStaySchema>) => {
    onExtend(values.newCheckOut, additionalNights, additionalCost)
    toast.success(`Estadía extendida hasta ${format(values.newCheckOut, 'PPP', { locale: es })}`)
    setOpen(false)
    form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ArrowLeftRight className="mr-2 h-4 w-4" />
          Extender estadía
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Extender estadía</DialogTitle>
          <DialogDescription>
            Selecciona la nueva fecha de salida para calcular el costo adicional
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="newCheckOut"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Nueva fecha de salida</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP', { locale: es })
                          ) : (
                            <span>Selecciona la fecha</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date <= currentCheckOut}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Preview del cálculo */}
            {additionalNights > 0 && (
              <div className="rounded-lg bg-muted p-4 space-y-2">
                <h4 className="font-semibold text-sm">Resumen de extensión</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Salida actual:</span>
                    <span>{format(currentCheckOut, 'PPP', { locale: es })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nueva salida:</span>
                    <span className="font-medium">{format(newCheckOut, 'PPP', { locale: es })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Noches adicionales:</span>
                    <span className="font-medium">{additionalNights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Precio por noche:</span>
                    <span>S/ {pricePerNight.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-border my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Costo adicional:</span>
                    <span className="text-primary">S/ {additionalCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={additionalNights <= 0}>
                Confirmar extensión
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
