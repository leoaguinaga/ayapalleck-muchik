'use client';

import { useQuery } from '@tanstack/react-query';
import { getChargesActivityById } from '@/lib/api/charges';

export function useChargesActivity(id: string) {
    return useQuery({
        queryKey: ['charges-activity', id],
        queryFn: () => getChargesActivityById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
