import React from 'react'
import { RoomInfoProps } from './RoomInfo.types' 
import { Bed, Clock } from 'lucide-react'

export default function RoomInfo({ roomNumber, roomType, nextReservation }: RoomInfoProps) {
  return (
    <div className='bg-card rounded-lg border p-5 w-full h-full'>
      <h2 className='text-xl font-bold mb-4'>Información de la habitación</h2>
      <div className='space-y-3'>
        <div className='flex items-center gap-2'>
          <Bed className='size-5 text-muted-foreground' />
          <span className='text-sm'>Tipo de habitación: <span className='font-semibold'>{roomType}</span></span>
        </div>
        {nextReservation && (
          <div className='flex items-center gap-2'>
            <Clock className='size-5 text-muted-foreground' />
            <span className='text-sm'>Próxima reserva en <span className='font-semibold'>{nextReservation}</span></span>
          </div>
        )}
      </div>
    </div>
  )
}
