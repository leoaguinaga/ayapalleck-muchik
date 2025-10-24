import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { usersOnShiftData } from './UsersOnShiftTable.data'

export default function UsersOnShiftTable() {
    return (
        <div className='w-full'>
            <DataTable columns={columns} data={usersOnShiftData} />
        </div>
    )
}
