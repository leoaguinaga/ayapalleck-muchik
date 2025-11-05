"use client"

import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { createBookingSchema } from "./CreateBookingModal.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from 'react-hot-toast'
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CreateBookingModalProps, Guest } from "./CreateBookingModal.types"
import { CustomerSelector } from '@/components/CustomerSelector'
import { CustomOpenModalButton } from '@/components/CustomOpenModalButton'
import FormCreateCustomer from '@/app/(routes)/customers/components/FromCreateCustomer/FormCreateCustomer'

// Mock data - reemplazar con datos reales
const mockGuests: Guest[] = [
  { id: "1", name: "Leonardo Aguinaga Paredes", document: "12345678" },
  { id: "2", name: "Juan Pérez García", document: "87654321" },
  { id: "3", name: "María López Sánchez", document: "11223344" },
  { id: "4", name: "Carlos Ramírez Torres", document: "44332211" }
]

export default function CreateBookingModal({ 
  isOpen, 
  onClose, 
  roomNumber = "", 
  selectedDate = "" 
}: CreateBookingModalProps) {
  const router = useRouter()
  const [changeType, setChangeType] = useState("Por noche")
  const [openCreateGuestModal, setOpenCreateGuestModal] = useState(false)

  const form = useForm<z.infer<typeof createBookingSchema>>({
    resolver: zodResolver(createBookingSchema),
    defaultValues: {
      guestId: "",
      roomNumber: roomNumber,
      checkIn: selectedDate,
      checkOut: "",
      reservationType: "Por noche",
      duration: "12",
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

  // Calcular la fecha de salida automáticamente
  React.useEffect(() => {
    const checkIn = form.watch('checkIn')
    const duration = form.watch('duration')
    const reservationType = form.watch('reservationType')

    if (checkIn && duration) {
      const checkInDate = new Date(checkIn)
      let checkOutDate = new Date(checkInDate)

      if (reservationType === 'Por noche') {
        // Duración en horas
        const hours = parseInt(duration)
        checkOutDate.setHours(checkOutDate.getHours() + hours)
      } else {
        // Por horas
        const hours = parseInt(duration)
        checkOutDate.setHours(checkOutDate.getHours() + hours)
      }

      form.setValue('checkOut', checkOutDate.toISOString())
    }
  }, [form.watch('checkIn'), form.watch('duration'), form.watch('reservationType')])

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
                    <FormLabel className="text-xs sm:text-sm">Selecciona el huésped</FormLabel>
                    <FormControl>
                      <CustomerSelector
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        customers={mockGuests.map(g => ({ id: g.id, name: g.name, document: g.document }))}
                        placeholder="Selecciona el huésped"
                        searchPlaceholder="Buscar por nombre o documento..."
                        className="w-full"
                      />
                    </FormControl>
                    <p className='text-xs text-muted-foreground'>
                      o{' '}
                      <CustomOpenModalButton
                        triggerLabel="Crea uno nuevo"
                        buttonVariant="underline"
                        buttonClassName="text-xs"
                        title="Nuevo Huésped"
                        description="Completa el formulario para registrar un nuevo huésped"
                        breadcrumb={["Huéspedes", "Agregar huésped"]}
                        open={openCreateGuestModal}
                        onOpenChange={setOpenCreateGuestModal}
                      >
                        <FormCreateCustomer setOpenModalCreateCustomer={setOpenCreateGuestModal} />
                      </CustomOpenModalButton>
                    </p>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roomNumber"
                render={({ field }) => (
                  <FormItem className='place-self-start'>
                    <FormLabel className="text-xs sm:text-sm">Elige la habitación</FormLabel>
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
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-xs sm:text-sm">Fecha de entrada</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal text-xs sm:text-sm",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP", { locale: es })
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
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => field.onChange(date?.toISOString())}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
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
                    <Select 
                      onValueChange={(value) => {
                        field.onChange(value)
                        setChangeType(value)
                        form.setValue("duration", value === "Por noche" ? "12" : "1")
                      }} 
                      value={field.value}
                    >
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
                    <FormLabel className="text-xs sm:text-sm">Duración</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl className='w-full'>
                        <SelectTrigger className="text-xs sm:text-sm">
                          <SelectValue placeholder="Selecciona duración" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-full'>
                        {changeType === "Por noche" ? (
                          <>
                            <SelectItem value="12" className="text-xs sm:text-sm">12 horas</SelectItem>
                            <SelectItem value="24" className="text-xs sm:text-sm">1 día</SelectItem>
                            <SelectItem value="36" className="text-xs sm:text-sm">1 día y medio</SelectItem>
                            <SelectItem value="48" className="text-xs sm:text-sm">2 días</SelectItem>
                            <SelectItem value="72" className="text-xs sm:text-sm">3 días</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="1" className="text-xs sm:text-sm">1 hora</SelectItem>
                            <SelectItem value="2" className="text-xs sm:text-sm">2 horas</SelectItem>
                            <SelectItem value="3" className="text-xs sm:text-sm">3 horas</SelectItem>
                            <SelectItem value="4" className="text-xs sm:text-sm">4 horas</SelectItem>
                          </>
                        )}
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
