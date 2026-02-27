import React from 'react'
import DataTable from './data-table'
import { columns } from './columns'
import { useCustomers } from '@/hooks/customers'
import { Skeleton } from '@/components/ui/skeleton'

interface CustomersTableProps {
  searchQuery: string;
}

export default function CustomersTable({ searchQuery }: CustomersTableProps) {
  const { data: customers, isLoading, isError } = useCustomers()

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className='w-full h-full flex items-center justify-center col-span-3'>
        <div className="text-center py-8 text-destructive">
          Error al cargar los clientes
        </div>
      </div>
    )
  }

  return (
    <div className='w-full'>
        <DataTable columns={columns} data={customers ?? []} searchQuery={searchQuery} />
    </div>
  )
}
