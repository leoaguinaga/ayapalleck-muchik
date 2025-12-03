'use client';

import { useQuery } from '@tanstack/react-query';
import { getTaxDebts } from '@/lib/api/tax-debts';

export function useTaxDebts() {
    return useQuery({
        queryKey: ['tax-debt'],
        queryFn: getTaxDebts,
        staleTime: 5 * 60 * 1000,
    });
}
