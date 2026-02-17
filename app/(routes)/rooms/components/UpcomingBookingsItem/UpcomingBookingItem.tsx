import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import { UpcomingBookingItemProps } from "./UpcomingBookingsItem.types";

export default function UpcomingBookingItem(props: UpcomingBookingItemProps) {
  const { roomNumber, customerName, checkInDate } = props;

  return (
    <div className='flex flex-col hover:bg-accent/50 gap-2.5 cursor-pointer rounded-lg border shadow-sm p-3'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-2xl font-semibold'>{roomNumber}</p>
          <p className='flex flex-row items-center text-sm text-muted-foreground'>
            {checkInDate} - {checkInDate}
          </p>
        </div>
        <p className='text-lg'>{customerName}</p>
      </div>
    </div>
  )
}