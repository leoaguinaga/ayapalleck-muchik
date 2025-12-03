'use client';

import { useQuery } from '@tanstack/react-query';
import { getChargesActivities } from '@/lib/api/charges';

export function useChargesActivities() {
    return useQuery({
        queryKey: ['charges-activity'],
        queryFn: getChargesActivities,
        staleTime: 5 * 60 * 1000,
    });
}
