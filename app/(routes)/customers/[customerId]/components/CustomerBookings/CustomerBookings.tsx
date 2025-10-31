import React from 'react'
import { customerBookingsData } from './CustomerBookings.data'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Tag from '@/components/Tag/Tag'
import { formatPrice } from '@/lib/formatPrice'
import { CalendarCheck } from 'lucide-react'

export default function CustomerBookings() {
    return (
        <div className='p-5 border rounded-lg bg-card'>
            <div className='flex items-center gap-2 mb-4'>
                <CalendarCheck className='size-5' />
                <h2 className='text-lg font-semibold'>Historial de reservas</h2>
            </div>
            <div className='flex flex-col gap-3'>
                {customerBookingsData.map((booking) => (
                    <div 
                        key={booking.id}
                        className='p-4 border rounded-lg hover:bg-accent/50 transition-colors'
                    >
                        <div className='flex items-start justify-between gap-4'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <p className='font-semibold'>Habitación {booking.roomNumber}</p>
                                    <Tag 
                                        text={booking.status} 
                                        color={
                                            booking.status === "Completada" ? "green" :
                                            booking.status === "En curso" ? "blue" :
                                            booking.status === "Confirmada" ? "purple" : "red"
                                        }
                                    />
                                </div>
                                <div className='text-sm text-muted-foreground space-y-1'>
                                    <p>
                                        <span className='font-medium'>Check-in:</span> {format(booking.checkIn, "dd/MM/yyyy", { locale: es })}
                                    </p>
                                    <p>
                                        <span className='font-medium'>Check-out:</span> {format(booking.checkOut, "dd/MM/yyyy", { locale: es })}
                                    </p>
                                    <p>
                                        <span className='font-medium'>Duración:</span> {booking.nights} {booking.nights === 1 ? 'noche' : 'noches'}
                                    </p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='text-lg font-bold'>{formatPrice(booking.totalAmount)}</p>
                                <p className='text-xs text-muted-foreground'>ID: {booking.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
