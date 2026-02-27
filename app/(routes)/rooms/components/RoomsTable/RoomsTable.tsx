'use client'

import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { Skeleton } from '@/components/ui/skeleton'
import { Room } from '@/lib/api/rooms'

type RoomsTableProps = {
  rooms: Room[]
  isLoading: boolean
  isError: boolean
}

export default function RoomsTable({ rooms, isLoading, isError }: RoomsTableProps) {

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
