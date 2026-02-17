'use client'

import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { useRooms } from '@/hooks/rooms/useRooms'
import { Skeleton } from '@/components/ui/skeleton'

export default function RoomsTable() {
  const { data: roomsResponse, isLoading, isError } = useRooms()

  // Extraer el array de habitaciones de la respuesta
  const rooms = React.useMemo(() => {
    if (!roomsResponse) return [];
    // Si la respuesta tiene una propiedad 'value', extraerla
    if (typeof roomsResponse === 'object' && 'value' in roomsResponse) {
      return Array.isArray(roomsResponse.value) ? roomsResponse.value : [];
    }
    // Si ya es un array, devolverlo directamente
    return Array.isArray(roomsResponse) ? roomsResponse : [];
  }, [roomsResponse]);

  if (isLoading) {
    return (
      <div className='w-full h-full overflow-hidden col-span-3 rounded-xl'>
        <Skeleton className="h-9.75 border-b border-gray-800 w-full bg-gray-800/80 rounded-b-none" />
        <Skeleton className="h-160 w-full bg-gray-200/80 rounded-t-none" />
      </div>
    )   
  }

  if (isError) {
    return (
      <div className='w-full h-full flex items-center justify-center col-span-3'>
        <div className="text-center py-8 text-destructive">
          Error al cargar las habitaciones
        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-full col-span-3'>
        <DataTable columns={columns} data={rooms} />
    </div>
  )
}
