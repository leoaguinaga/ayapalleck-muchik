'use client';

import { useQuery } from '@tanstack/react-query';
import { getCharges } from '@/lib/api/charges';

export function useCharges() {
    return useQuery({
        queryKey: ['charge'],
        queryFn: getCharges,
        staleTime: 5 * 60 * 1000,
    });
}
