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
      <div className='w-full h-full space-y-3'>
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    )   
  }

  if (isError) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <div className="text-center py-8 text-destructive">
          Error al cargar las habitaciones
        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-full'>
        <DataTable columns={columns} data={rooms} />
    </div>
  )
}
