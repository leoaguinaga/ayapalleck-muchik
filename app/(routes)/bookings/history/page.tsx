"use client";

import React, { useState } from 'react'
import BookingsTable from './components/BookingsTable'
import BookingsInfo from './components/BookingsInfo/BookingsInfo'
import BookingHistoryNavbar from './components/BookingHistoryNavbar/BookingNavbarHistory'

export default function BookingHistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roomTypeFilter, setRoomTypeFilter] = useState("all");

  return (
    <div className='flex flex-col gap-4 w-full h-full'>
      <BookingHistoryNavbar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        roomTypeFilter={roomTypeFilter}
        onRoomTypeChange={setRoomTypeFilter}
      />
      <BookingsInfo />      
      <BookingsTable 
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        roomTypeFilter={roomTypeFilter}
      />
    </div>
  )
}
