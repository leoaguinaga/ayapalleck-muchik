import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { roomTypes } from './RoomTypeTable.data'

export default function RoomTypeTable() {
  return (
    <div>
        <DataTable columns={columns} data={roomTypes} />
    </div>
  )
}
