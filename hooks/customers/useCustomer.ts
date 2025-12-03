'use client';

import { useQuery } from '@tanstack/react-query';
import { getCustomerById } from '@/lib/api/customers';

export function useCustomer(id: string) {
    return useQuery({
        queryKey: ['customer', id],
        queryFn: () => getCustomerById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
