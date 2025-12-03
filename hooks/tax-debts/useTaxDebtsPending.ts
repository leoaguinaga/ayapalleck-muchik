'use client';

import { useQuery } from '@tanstack/react-query';
import { getTaxDebtsPending } from '@/lib/api/tax-debts';

export function useTaxDebtsPending() {
    return useQuery({
        queryKey: ['tax-debt', 'pending'],
        queryFn: getTaxDebtsPending,
        staleTime: 5 * 60 * 1000,
    });
}
