'use client';

import { useState, useMemo } from 'react';
import { CustomerSelectorProps } from './CustomerSelector.types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export function CustomerSelector({
  value,
  onChange,
  customers,
  placeholder = 'Selecciona el cliente',
  searchPlaceholder = 'Buscar por nombre o documento...',
  className = 'w-full',
}: CustomerSelectorProps) {
  const [customerSearch, setCustomerSearch] = useState('');

  const filteredCustomers = useMemo(() => {
    if (!customerSearch) return customers;
    
    const searchLower = customerSearch.toLowerCase();
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchLower) ||
      customer.document.toLowerCase().includes(searchLower)
    );
  }, [customerSearch, customers]);

  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-h-80">
        <div className="px-2 pb-2" onPointerDown={(e) => e.stopPropagation()}>
          <Input
            placeholder={searchPlaceholder}
            value={customerSearch}
            onChange={(e) => setCustomerSearch(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            className="h-8"
            autoComplete="off"
          />
        </div>
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer) => (
            <SelectItem key={customer.id} value={customer.id}>
              {customer.name} - {customer.document}
            </SelectItem>
          ))
        ) : (
          <div className="px-2 py-6 text-center text-sm text-muted-foreground">
            No se encontraron clientes
          </div>
        )}
      </SelectContent>
    </Select>
  );
}
