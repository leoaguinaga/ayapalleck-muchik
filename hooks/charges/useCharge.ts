'use client';

import { useQuery } from '@tanstack/react-query';
import { getChargeById } from '@/lib/api/charges';

export function useCharge(id: string) {
    return useQuery({
        queryKey: ['charge', id],
        queryFn: () => getChargeById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
