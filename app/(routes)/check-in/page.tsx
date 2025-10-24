"use client"

import React, { useState, useMemo } from 'react'
import RoomCard from './components/RoomCard/RoomCard'
import { rooms } from './components/RoomCard/RoomCard.data'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import RoomTypeSelect from './components/RoomTypeSelect'

export default function CheckInPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [roomTypeFilter, setRoomTypeFilter] = useState('all')

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesSearch = room.number.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = roomTypeFilter === 'all' || room.room_types === roomTypeFilter
      return matchesSearch && matchesType
    })
  }, [searchQuery, roomTypeFilter])

  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <div className='flex flex-col sm:flex-row gap-2.5 justify-between w-full'>
        <div className="relative w-full">
          <Input 
            placeholder="Buscar por número de habitación..." 
            className="rounded-lg pr-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute top-2 right-2 size-5 text-gray-500" />
        </div>
        <RoomTypeSelect 
          value={roomTypeFilter} 
          onValueChange={setRoomTypeFilter} 
        />
      </div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <RoomCard 
              key={index} 
              number={room.number} 
              room_type={room.room_types} 
              status={room.status} 
              available={room.available} 
            />
          ))
        ) : (
          <div className='col-span-full text-center py-12 text-muted-foreground'>
            No se encontraron habitaciones que coincidan con los filtros.
          </div>
        )}
      </div>
    </div>
  )
}