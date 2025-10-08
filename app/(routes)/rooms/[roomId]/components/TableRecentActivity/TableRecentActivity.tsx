import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { recentActivity } from './TableRecentActivity.data'

export default function TableRecentActivity() {
    return (
        <div className='mt-2'>
            <DataTable columns={columns} data={recentActivity} />
        </div>
    )
}
