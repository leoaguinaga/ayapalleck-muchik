import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { roomBookings } from './TableRoomBookings.data'

export default function TableRoomBookings() {
  return (
    <div>
        <DataTable columns={columns} data={roomBookings} />
    </div>
  )
}
