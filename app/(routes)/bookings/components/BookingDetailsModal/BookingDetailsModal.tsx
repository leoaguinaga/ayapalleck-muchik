"use client"

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookingDetailsModalProps } from "./BookingDetailsModal.types"
import { Calendar, User, Home, Clock, CreditCard, FileText } from 'lucide-react'
import { formatPrice } from '@/lib/formatPrice'

export default function BookingDetailsModal({ 
  isOpen, 
  onClose, 
  booking 
}: BookingDetailsModalProps) {
  if (!booking) return null

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const calculateNights = () => {
    const checkIn = new Date(booking.checkIn)
    const checkOut = new Date(booking.checkOut)
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const truncateEmail = (email: string, maxLength: number = 25) => {
    if (email.length <= maxLength) return email
    return email.substring(0, maxLength) + '...'
  }

  const getStatusBadge = () => {
    switch (booking.status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmada</Badge>
      case 'pending':
        return <Badge className="bg-yellow-500">Pendiente</Badge>
      case 'cancelled':
        return <Badge className="bg-red-500">Cancelada</Badge>
      default:
        return <Badge>Desconocido</Badge>
    }
  }

  const nights = calculateNights()
  const pricePerNight = 120 // Mock - debería venir de los datos
  const totalPrice = nights * pricePerNight

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[70vh] overflow-y-scroll scrollbar-hide p-4" showCloseButton={false}>
        <DialogHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <DialogTitle className="text-lg sm:text-xl">Detalles de la Reserva</DialogTitle>
            {getStatusBadge()}
          </div>
          <DialogDescription className="text-sm">
            Información completa de la reserva {booking.id}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {/* Columna izquierda */}
          <div className="space-y-4 sm:space-y-6">
            {/* Información del huésped */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                <User className="size-4" />
                Información del Huésped
              </h3>
              <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                <p className="font-medium text-base sm:text-lg">{booking.guestName}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">DNI: 12345678</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Tel: +51 987 654 321</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Email: leo.aguinaga@outlook.com</p>
              </div>
            </div>

            {/* Detalles de la habitación */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                <Home className="size-4" />
                Habitación
              </h3>
              <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                <p className="text-xl sm:text-2xl font-bold">Habitación {booking.roomNumber}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Tipo: Matrimonial</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Capacidad: 2 personas</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Piso: {Math.floor(parseInt(booking.roomNumber) / 100)}</p>
              </div>
            </div>

            {/* Fechas */}
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <Calendar className="size-4" />
                  Check-in
                </h3>
                <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                  <p className="font-medium text-sm sm:text-base break-words">{formatDate(booking.checkIn)}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">14:00 hrs</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <Calendar className="size-4" />
                  Check-out
                </h3>
                <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                  <p className="font-medium text-sm sm:text-base break-words">{formatDate(booking.checkOut)}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">12:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-4 sm:space-y-6">
            {/* Duración y precio */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                <Clock className="size-4" />
                Duración y Precio
              </h3>
              <div className="bg-muted/50 rounded-lg p-3 sm:p-4 space-y-2">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Duración:</span>
                  <span className="font-medium text-sm sm:text-base">{nights} {nights === 1 ? 'noche' : 'noches'}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Precio por noche:</span>
                  <span className="font-medium text-sm sm:text-base">{formatPrice(pricePerNight)}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Subtotal:</span>
                  <span className="font-medium text-sm sm:text-base">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Descuento:</span>
                  <span className="font-medium text-sm sm:text-base text-green-600">-{formatPrice(20)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between items-center gap-2">
                  <span className="font-semibold text-sm sm:text-base">Total:</span>
                  <span className="text-lg sm:text-xl font-bold">{formatPrice(totalPrice - 20)}</span>
                </div>
              </div>
            </div>

            {/* Método de pago */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                <CreditCard className="size-4" />
                Información de Pago
              </h3>
              <div className="bg-muted/50 rounded-lg p-3 sm:p-4 space-y-2">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Método de pago:</span>
                  <span className="font-medium text-sm sm:text-base">Tarjeta de crédito</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Adelanto:</span>
                  <span className="font-medium text-sm sm:text-base">{formatPrice(100)}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Pendiente:</span>
                  <span className="font-medium text-sm sm:text-base">{formatPrice(totalPrice - 20 - 100)}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Estado de pago:</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs sm:text-sm">
                    Adelanto Recibido
                  </Badge>
                </div>
              </div>
            </div>

            {/* Notas adicionales */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                <FileText className="size-4" />
                Notas Adicionales
              </h3>
              <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Cliente habitual. Prefiere habitación con vista al jardín. Llegada estimada: 15:30 hrs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones */}
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end pt-4 border-t'>
          <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Cerrar
          </Button>
          <Button type="button" variant="outline" className="w-full sm:w-auto">
            Editar Reserva
          </Button>
          <Button type="button" variant="destructive" className="w-full sm:w-auto">
            Cancelar Reserva
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
