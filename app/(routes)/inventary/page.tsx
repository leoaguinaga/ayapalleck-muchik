import React from 'react'
import InventoryInfo from './components/InventoryInfo'
import InventoryTable from './components/InventoryTable'
import MovementHistory from './components/MovementHistory'
import LowStockAlert from './components/LowStockAlert'

export default function InventaryPage() {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <InventoryInfo />
      <div className='grid grid-cols-1 xl:grid-cols-5 gap-5 w-full h-full'>
        <div className='w-full h-full col-span-3'>
          <InventoryTable />
        </div>
        <div className='col-span-2 flex flex-col gap-5'>
          <LowStockAlert />
        </div>
      </div>
    </div>
  )
}
