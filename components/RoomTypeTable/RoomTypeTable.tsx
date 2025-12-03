'use client'

import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { useRoomTypes } from '@/hooks/room-types/useRoomTypes'
import { Skeleton } from '@/components/ui/skeleton'

export default function RoomTypeTable() {
  const { data: roomTypes, isLoading, isError } = useRoomTypes()

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-destructive">
        Error al cargar los tipos de habitación
      </div>
    )
  }

  return (
    <div>
      <DataTable columns={columns} data={roomTypes ?? []} />
    </div>
  )
}
