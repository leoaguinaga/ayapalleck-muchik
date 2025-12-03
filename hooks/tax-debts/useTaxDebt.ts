'use client';

import { useQuery } from '@tanstack/react-query';
import { getTaxDebtById } from '@/lib/api/tax-debts';

export function useTaxDebt(id: string) {
    return useQuery({
        queryKey: ['tax-debt', id],
        queryFn: () => getTaxDebtById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
