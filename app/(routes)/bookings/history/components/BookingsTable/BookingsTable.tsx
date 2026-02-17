import React from 'react'
import DataTable from './data-table'
import { bookings } from './BookingsTable.data'
import { columns } from './columns'

type BookingsTableProps = {
  searchQuery: string;
  statusFilter: string;
  roomTypeFilter: string;
};

export default function BookingsTable({ 
  searchQuery, 
  statusFilter, 
  roomTypeFilter 
}: BookingsTableProps) {
  const filteredBookings = React.useMemo(() => {
    return bookings.filter((booking) => {
      const matchesSearch = 
        booking.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.room.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || booking.status === statusFilter;
      
      const matchesRoomType = 
        roomTypeFilter === "all" || 
        !booking.roomType || 
        booking.roomType === roomTypeFilter;
      
      return matchesSearch && matchesStatus && matchesRoomType;
    });
  }, [searchQuery, statusFilter, roomTypeFilter]);

  return (
    <div>
        <DataTable data={filteredBookings} columns={columns} />
    </div>
  )
}
