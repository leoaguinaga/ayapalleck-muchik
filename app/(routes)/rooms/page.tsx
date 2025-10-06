import React from 'react'
import RoomsTable from './components/RoomsTable/RoomsTable'
import RoomsInfo from './components/RoomsInfo'
import UpcomingBookingsTable from './components/UpcomingBookingsTable'

export default function page() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-5 w-full h-full'>
      <div className='flex flex-col gap-5 w-full lg:w-3/4 h-full'>
        <RoomsInfo />
        <RoomsTable />
      </div>
      <UpcomingBookingsTable />
    </div>
  )
}