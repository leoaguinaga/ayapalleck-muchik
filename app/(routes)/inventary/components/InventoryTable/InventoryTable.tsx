import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { inventoryData } from './InventoryTable.data'

export default function InventoryTable() {
  return (
    <div className='w-full'>
        <DataTable columns={columns} data={inventoryData} />
    </div>
  )
}
