import React from 'react'
import ButtonAddBooking from '../ButtonAddBooking'
import TableRoomBookings from '../TableRoomBookings'

export default function RoomBookings() {
  return (
    <div className='flex flex-col w-full gap-4.5 min-h-full p-5 border rounded-lg bg-card'> 
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>Historial de reservas</h2>
        <ButtonAddBooking />
      </div>
      <TableRoomBookings />
    </div>
  )
}
