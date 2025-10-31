import React from 'react'
import MovementHistoryInfo from './components/MovementHistoryInfo'
import MovementHistoryTable from './components/MovementHistoryTable'

export default function InventoryHistoryPage() {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <MovementHistoryInfo />
      <MovementHistoryTable />
    </div>
  )
}
