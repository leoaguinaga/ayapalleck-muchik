'use client';

import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '@/lib/api/customers';

export function useCustomers() {
    return useQuery({
        queryKey: ['customer'],
        queryFn: getCustomers,
        staleTime: 5 * 60 * 1000,
    });
}
