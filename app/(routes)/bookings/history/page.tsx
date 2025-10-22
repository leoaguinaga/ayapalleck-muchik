import React from 'react'
import BookingsTable from './components/BookingsTable'
import BookingsInfo from './components/BookingsInfo/BookingsInfo'

export default function BookingHistoryPage() {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <BookingsInfo />      
      <BookingsTable />
    </div>
  )
}
