import React from 'react'
import DataTable from './data-table'
import { bookings } from './BookingsTable.data'
import { columns } from './columns'

export default function BookingsTable() {
  return (
    <div>
        <DataTable data={bookings} columns={columns} />
    </div>
  )
}
