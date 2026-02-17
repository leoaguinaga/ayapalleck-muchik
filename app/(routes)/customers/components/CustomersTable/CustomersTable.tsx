import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { customersData } from './CustomersTable.data'

interface CustomersTableProps {
  searchQuery: string;
}

export default function CustomersTable({ searchQuery }: CustomersTableProps) {
  return (
    <div className='w-full'>
        <DataTable columns={columns} data={customersData} searchQuery={searchQuery} />
    </div>
  )
}
