'use client';

import { useQuery } from '@tanstack/react-query';
import { getChargesLowStock } from '@/lib/api/charges';

export function useChargesLowStock() {
    return useQuery({
        queryKey: ['charge', 'low-stock'],
        queryFn: getChargesLowStock,
        staleTime: 5 * 60 * 1000,
    });
}
