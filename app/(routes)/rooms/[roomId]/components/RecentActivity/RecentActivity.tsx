import React from 'react'
import States from '../States'
import TableRecentActivity from '../TableRecentActivity'

export default function RecentActivity() {
  return (
    <div className='flex flex-col gap-2 p-5 border rounded-lg bg-card'>
        <h2 className='text-lg font-semibold'>Actividad reciente</h2>
        <States />
        <TableRecentActivity />
    </div>
  )
}
