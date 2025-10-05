import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { rooms } from './RoomsTable.data'

export default function RoomsTable() {
  return (
    <div className='w-full h-full'>
        <DataTable columns={columns} data={rooms} />
    </div>
  )
}
