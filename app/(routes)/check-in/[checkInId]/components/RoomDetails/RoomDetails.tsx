import React from 'react'
import { RoomDetailsProps } from './RoomDetails.types'

export default function RoomDetails({ description }: RoomDetailsProps) {
  return (
    <div className='bg-card rounded-lg border p-5 w-full'>
      <h2 className='text-xl font-bold mb-4'>Detalles de la habitación</h2>
      <p className='text-sm text-muted-foreground border rounded-lg p-2 max-h-[54px] overflow-hidden'>
        {description}
      </p>
    </div>
  )
}
