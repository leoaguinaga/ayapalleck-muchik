import UpcomingBookingItem from '../UpcomingBookingsItem'
import { upcomingBookingsData } from './UpcomingBookingsTable.data'

export default function UpcomingBookingsTable() {
  return (
    <div className='flex flex-col lg:min-h-full rounded-xl bg-card col-span-2 p-4 gap-3.5 min-w-120'>
      <h1 className='text-lg font-semibold rounded-t-lg'>Reservas programadas</h1>
      <div className='flex flex-col max-h-80 overflow-auto lg:min-h-full lg:max-h-full gap-2'>
        {upcomingBookingsData.map((booking, index) => (
          <UpcomingBookingItem key={index} {...booking} />
        ))}
      </div>
    </div>
  )
}
