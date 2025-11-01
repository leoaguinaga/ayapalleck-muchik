"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getNext7Days, formatDateSpanish, formatDateKey, isSameDay } from '@/lib/date-utils'
import { mockBookings, mockRooms } from './BookingCalendar.data'
import { Booking } from './BookingCalendar.types'
import CreateBookingModal from '../CreateBookingModal'
import BookingDetailsModal from '../BookingDetailsModal'
import { cn } from '@/lib/utils'

export default function BookingCalendar() {
    const [weekOffset, setWeekOffset] = useState(0)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<string>('')
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

    // Calcular las fechas de la semana actual
    const getDates = () => {
        const today = new Date()
        today.setDate(today.getDate() + (weekOffset * 7))
        const days: Date[] = []

        for (let i = 0; i < 7; i++) {
            const date = new Date(today)
            date.setDate(today.getDate() + i)
            days.push(date)
        }

        return days
    }

    const dates = getDates()

    // Función para obtener las reservas de una habitación en una fecha específica
    const getBookingsForCell = (roomNumber: string, date: Date): Booking[] => {
        const dateKey = formatDateKey(date)

        return mockBookings.filter(booking => {
            const checkIn = new Date(booking.checkIn)
            const checkOut = new Date(booking.checkOut)

            return (
                booking.roomNumber === roomNumber &&
                date >= checkIn &&
                date < checkOut
            )
        })
    }

    // Función para calcular el ancho de la reserva en el calendario
    const getBookingWidth = (booking: Booking, startDate: Date): number => {
        const checkIn = new Date(booking.checkIn)
        const checkOut = new Date(booking.checkOut)

        // Calcular cuántos días de la semana actual ocupa la reserva
        let daysInWeek = 0
        dates.forEach(date => {
            if (date >= checkIn && date < checkOut) {
                daysInWeek++
            }
        })

        return daysInWeek
    }

    // Función para verificar si es el primer día de la reserva en la semana visible
    const isFirstDayInWeek = (booking: Booking, date: Date): boolean => {
        const checkIn = new Date(booking.checkIn)
        const dateKey = formatDateKey(date)
        const checkInKey = formatDateKey(checkIn)

        // Si es el día de check-in, es el primero
        if (dateKey === checkInKey) return true

        // Si el check-in es antes de esta semana y este es el primer día de la semana
        if (checkIn < dates[0] && isSameDay(date, dates[0])) return true

        return false
    }

    const handleCellClick = (roomNumber: string, date: Date, event: React.MouseEvent) => {
        const bookings = getBookingsForCell(roomNumber, date)
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        // Si hay una reserva en esta celda, abrir modal de detalles
        if (bookings.length > 0) {
            event.stopPropagation()
            setSelectedBooking(bookings[0])
            setIsDetailsModalOpen(true)
        } else if (date >= today) {
            // Solo permitir crear reservas desde hoy en adelante
            setSelectedRoom(roomNumber)
            setSelectedDate(formatDateKey(date))
            setIsCreateModalOpen(true)
        }
    }

    const handleBookingClick = (booking: Booking, event: React.MouseEvent) => {
        event.stopPropagation()
        setSelectedBooking(booking)
        setIsDetailsModalOpen(true)
    }

    const handlePrevWeek = () => {
        setWeekOffset(prev => prev - 1)
    }

    const handleNextWeek = () => {
        setWeekOffset(prev => prev + 1)
    }

    return (
        <div className='flex flex-col gap-5'>
            {/* Header con navegación */}


            {/* Calendario */}
            <div className='bg-card rounded-lg border overflow-hidden'>
                <div className='overflow-x-auto'>
                    <div className='min-w-[900px]'>
                        {/* Header de fechas */}
                        <div className='grid grid-cols-8 border-b bg-muted/50'>
                            <div className='p-3 border-r flex items-center justify-center gap-2'>
                                <Button variant="outline" className='bg-none' size="icon" onClick={handlePrevWeek}>
                                    <ChevronLeft className='size-4' />
                                </Button>
                                <Button variant="outline" size="icon" onClick={handleNextWeek}>
                                    <ChevronRight className='size-4' />
                                </Button>
                            </div>
                            {dates.map((date, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        'p-3 text-center border-r text-sm font-medium',
                                        isSameDay(date, new Date()) && 'bg-primary/10'
                                    )}
                                >
                                    {formatDateSpanish(date)}
                                </div>
                            ))}
                        </div>

                        {/* Filas de habitaciones */}
                        {mockRooms.map((room, roomIndex) => (
                            <div key={room.number} className='grid grid-cols-8 border-b last:border-b-0'>
                                {/* Columna de número de habitación */}
                                <div className='p-3 border-r bg-muted/30 flex items-center justify-center font-medium'>
                                    Hab {room.number}
                                </div>

                                {/* Celdas de fechas */}
                                {dates.map((date, dateIndex) => {
                                    const bookings = getBookingsForCell(room.number, date)
                                    const mainBooking = bookings[0] // Tomamos la primera reserva si hay varias
                                    const isFirst = mainBooking ? isFirstDayInWeek(mainBooking, date) : false
                                    const width = mainBooking && isFirst ? getBookingWidth(mainBooking, date) : 0
                                    const today = new Date()
                                    today.setHours(0, 0, 0, 0)
                                    const isPastDate = date < today
                                    const isToday = isSameDay(date, new Date())

                                    return (
                                        <div
                                            key={dateIndex}
                                            className={cn(
                                                'relative p-2 border-r h-16 transition-colors',
                                                isToday && 'bg-primary/5',
                                                !isPastDate && !mainBooking && 'cursor-pointer hover:bg-muted/50',
                                                isPastDate && !mainBooking && 'bg-muted/20 cursor-not-allowed'
                                            )}
                                            onClick={(e) => handleCellClick(room.number, date, e)}
                                        >
                                            {mainBooking && isFirst && (
                                                <div
                                                    className='absolute inset-y-1 left-1 rounded px-2 py-1 text-xs font-medium text-white overflow-hidden whitespace-nowrap text-ellipsis z-10 cursor-pointer hover:opacity-90 transition-opacity'
                                                    style={{
                                                        backgroundColor: mainBooking.color || '#3b82f6',
                                                        width: `calc(${width * 100}% + ${(width - 1) * 8}px)`,
                                                    }}
                                                    onClick={(e) => handleBookingClick(mainBooking, e)}
                                                >
                                                    {mainBooking.guestName}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal para crear reserva */}
            <CreateBookingModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                roomNumber={selectedRoom}
                selectedDate={selectedDate}
            />

            {/* Modal para ver detalles de reserva */}
            <BookingDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                booking={selectedBooking}
            />
        </div>
    )
}
