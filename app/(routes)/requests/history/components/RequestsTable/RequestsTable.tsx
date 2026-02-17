import React from 'react'
import DataTable from './data-table'
import { requests } from './RequestsTable.data'
import { columns } from './columns'

type RequestsTableProps = {
  searchQuery: string;
  statusFilter: string;
  roomTypeFilter: string;
};

export default function RequestsTable({ 
  searchQuery, 
  statusFilter, 
  roomTypeFilter 
}: RequestsTableProps) {
  const filteredRequests = React.useMemo(() => {
    return requests.filter((request) => {
      const matchesSearch = 
        request.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.customerEmail.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = 
        statusFilter === "all" || 
        request.state.toLowerCase() === statusFilter.toLowerCase();
      
      const matchesRoomType = 
        roomTypeFilter === "all" || 
        request.roomType.toLowerCase() === roomTypeFilter.toLowerCase();
      
      return matchesSearch && matchesStatus && matchesRoomType;
    });
  }, [searchQuery, statusFilter, roomTypeFilter]);

  return (
    <div>
        <DataTable data={filteredRequests} columns={columns}/>
    </div>
  )
}
