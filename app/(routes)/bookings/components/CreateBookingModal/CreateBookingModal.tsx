"use client"

import React from 'react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { createBookingSchema } from "./CreateBookingModal.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from 'react-hot-toast'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
import { Textarea } from "@/components/ui/textarea"
import { CreateBookingModalProps, Guest } from "./CreateBookingModal.types"

// Mock data - reemplazar con datos reales
const mockGuests: Guest[] = [
  { id: "1", name: "Leonardo Aguinaga Paredes" },
  { id: "2", name: "Juan Pérez García" },
  { id: "3", name: "María López Sánchez" },
  { id: "4", name: "Carlos Ramírez Torres" }
]

export default function CreateBookingModal({ 
  isOpen, 
  onClose, 
  roomNumber = "", 
  selectedDate = "" 
}: CreateBookingModalProps) {
  const router = useRouter()

  const form = useForm<z.infer<typeof createBookingSchema>>({
    resolver: zodResolver(createBookingSchema),
    defaultValues: {
      guestId: "",
      roomNumber: roomNumber,
      checkIn: selectedDate,
      checkOut: "",
      reservationType: "Por noche",
      duration: "",
      discount: 0,
      taxiFee: 0,
      advance: 0,
      notes: ""
    }
  })

  React.useEffect(() => {
    if (roomNumber) {
      form.setValue('roomNumber', roomNumber)
    }
    if (selectedDate) {
      form.setValue('checkIn', selectedDate)
    }
  }, [roomNumber, selectedDate, form])

  const onSubmit = async (values: z.infer<typeof createBookingSchema>) => {
    console.log('Nueva reserva:', values)
    toast.success('Reserva creada con éxito')
    form.reset()
    onClose()
    router.refresh()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Crear Nueva Reserva</DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">
            Registra una nueva reserva para la habitación {roomNumber || 'seleccionada'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name="guestId"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className="text-xs sm:text-sm">Huésped</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl className='w-full  max-w-[223px]'>
                        <SelectTrigger className="text-xs sm:text-sm">
                          <SelectValue placeholder="Selecciona un huésped" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-full'>
                        {mockGuests.map((guest) => (
                          <SelectItem key={guest.id} value={guest.id} className="text-xs sm:text-sm">
                            {guest.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="new" className="text-xs sm:text-sm">+ Crear nuevo huésped</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roomNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Habitación</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="101" className="text-xs sm:text-sm" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Fecha de entrada</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="text-xs sm:text-sm" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Fecha de salida</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="text-xs sm:text-sm" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reservationType"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className="text-xs sm:text-sm">Tipo de reserva</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl className='w-full'>
                        <SelectTrigger className="text-xs sm:text-sm">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-full'>
                        <SelectItem value="Por noche" className="text-xs sm:text-sm">Por noche</SelectItem>
                        <SelectItem value="Por horas" className="text-xs sm:text-sm">Por horas</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className="text-xs sm:text-sm">Duración (opcional)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl className='w-full'>
                        <SelectTrigger className="text-xs sm:text-sm">
                          <SelectValue placeholder="Selecciona duración" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-full'>
                        <SelectItem value="12" className="text-xs sm:text-sm">12 horas</SelectItem>
                        <SelectItem value="1" className="text-xs sm:text-sm">1 día</SelectItem>
                        <SelectItem value="2" className="text-xs sm:text-sm">2 días</SelectItem>
                        <SelectItem value="3" className="text-xs sm:text-sm">3 días</SelectItem>
                        <SelectItem value="7" className="text-xs sm:text-sm">1 semana</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Descuento (S/)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                        className="text-xs sm:text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="taxiFee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Cargo por taxi (S/)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                        className="text-xs sm:text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="advance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm">Adelanto (S/)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                        className="text-xs sm:text-sm"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs sm:text-sm">Notas (opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Información adicional sobre la reserva..."
                      className="resize-none text-xs sm:text-sm"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className='flex flex-col sm:flex-row gap-3 justify-end pt-4'>
              <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto text-xs sm:text-sm">
                Cancelar
              </Button>
              <Button type="submit" className="w-full sm:w-auto text-xs sm:text-sm">
                Crear Reserva
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
