import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { customersData } from './CustomersTable.data'

export default function CustomersTable() {
  return (
    <div className='w-full'>
        <DataTable columns={columns} data={customersData} />
    </div>
  )
}
