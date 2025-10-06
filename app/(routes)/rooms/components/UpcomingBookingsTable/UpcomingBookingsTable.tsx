import UpcomingBookingItem from '../UpcomingBookingsItem'
import { upcomingBookingsData } from './UpcomingBookingsTable.data'

export default function UpcomingBookingsTable() {
  return (
    <div className='flex flex-col min-w-[290px] lg:w-1/4 lg:min-h-full border rounded-lg bg-card'>
      <h1 className='text-lg font-bold p-2.5 bg-accent-foreground text-white dark:text-black rounded-t-lg'>Reservas programadas</h1>
      <div className='flex flex-col max-h-[320px] overflow-auto lg:min-h-full lg:max-h-full'>
        {upcomingBookingsData.map((booking, index) => (
          <UpcomingBookingItem key={index} {...booking} />
        ))}
      </div>
    </div>
  )
}
