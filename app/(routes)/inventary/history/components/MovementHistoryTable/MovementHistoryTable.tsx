import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { MovementHistoryTableProps } from './MovementHistoryTable.types'

interface MovementHistoryTableComponentProps {
  data: MovementHistoryTableProps[];
}

export default function MovementHistoryTable({ data }: MovementHistoryTableComponentProps) {
  return (
    <div className='w-full'>
        <DataTable columns={columns} data={data} />
    </div>
  )
}
