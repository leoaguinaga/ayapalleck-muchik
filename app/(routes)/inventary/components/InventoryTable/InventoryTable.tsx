import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { InventoryTableProps } from './InventoryTable.types'

interface InventoryTableComponentProps {
  data: InventoryTableProps[];
}

export default function InventoryTable({ data }: InventoryTableComponentProps) {
  return (
    <div className='w-full'>
        <DataTable columns={columns} data={data} />
    </div>
  )
}
