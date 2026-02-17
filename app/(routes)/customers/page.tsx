"use client";

import React, { useState } from 'react'
import CustomersTable from './components/CustomersTable'
import CustomersInfo from './components/CustomersInfo'
import CustomersTabs from './components/CustomersTabs'
import CustomerNavbar from './components/CustomerNavbar/CustomerNavbar'

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='flex flex-col-reverse lg:flex-col gap-4 w-full h-full'>
      <CustomerNavbar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <CustomersInfo />
      <div className='grid grid-cols-1 xl:grid-cols-5 gap-4 w-full h-full'>
        <div className='w-full h-full col-span-3'>
          <CustomersTable searchQuery={searchQuery} />
        </div>
        <div className='border rounded-xl p-4 min-h-full bg-card col-span-2 flex flex-col'>
          <CustomersTabs />
        </div>
      </div>
    </div>
  )
}
