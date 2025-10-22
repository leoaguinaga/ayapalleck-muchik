import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { activeCustomersData } from './ActiveCustomersTable.data'

export default function ActiveCustomersTable() {
  return (
    <div className='w-full'>
            <DataTable columns={columns} data={activeCustomersData} />
        </div>
  )
}
