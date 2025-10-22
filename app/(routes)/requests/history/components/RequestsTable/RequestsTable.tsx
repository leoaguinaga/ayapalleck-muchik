import React from 'react'
import DataTable from './data-table'
import { requests } from './RequestsTable.data'
import { columns } from './columns'

export default function RequestsTable() {
  return (
    <div>
        <DataTable data={requests} columns={columns}/>
    </div>
  )
}
