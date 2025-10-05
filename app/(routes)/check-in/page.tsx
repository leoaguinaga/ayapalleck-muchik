import React from 'react'
import RoomCard from './components/RoomCard/RoomCard'
import { rooms } from './components/RoomCard/RoomCard.data'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import RoomTypeSelect from './components/RoomTypeSelect'

export default function CheckInPage() {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <div className='flex flex-col sm:flex-row gap-2.5 justify-between w-full'>
        <div className="relative w-full">
          <Input placeholder="Buscar por número de habitación..." className="rounded-lg pr-10" />
          <Search className="absolute top-2 right-2 size-5 text-gray-500" />
        </div>
        <RoomTypeSelect />
      </div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {rooms.map((room, index) => (
          <RoomCard key={index} number={room.number} room_type={room.room_types} status={room.status} available={room.available} />
        ))}
      </div>
    </div>

  )
}
