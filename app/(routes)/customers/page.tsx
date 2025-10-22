import React from 'react'
import CustomersTable from './components/CustomersTable'
import CustomersInfo from './components/CustomersInfo'
import CustomersTabs from './components/CustomersTabs'

export default function CustomersPage() {
  return (
    <div className='flex flex-col-reverse lg:flex-col gap-5 w-full h-full'>
      <CustomersInfo />
      <div className='grid grid-cols-1 xl:grid-cols-5 gap-5 w-full h-full'>
        <div className='w-full h-full col-span-3'>
          <CustomersTable />
        </div>
        <div className='border rounded-lg p-5 min-h-full bg-card col-span-2 flex flex-col gap-2.5'>
          <CustomersTabs />
        </div>
      </div>
    </div>
  )
}
