import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { movementHistoryData } from './MovementHistoryTable.data'

export default function MovementHistoryTable() {
  return (
    <div className='w-full'>
        <DataTable columns={columns} data={movementHistoryData} />
    </div>
  )
}
