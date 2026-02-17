"use client";

import { useState } from 'react';
import RequestHistoryNavbar from './components/RequestHistoryNavbar'
import RequestsInfo from './components/RequestsInfo'
import RequestsTable from './components/RequestsTable'

export default function RequestHistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roomTypeFilter, setRoomTypeFilter] = useState("all");

  return (
    <div className='flex flex-col gap-4 w-full h-full'>
      <RequestHistoryNavbar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        roomTypeFilter={roomTypeFilter}
        onRoomTypeChange={setRoomTypeFilter}
      />
      <RequestsInfo />
      <RequestsTable 
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        roomTypeFilter={roomTypeFilter}
      />
    </div>
  )
}
