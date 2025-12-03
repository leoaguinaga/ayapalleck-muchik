'use client';

import { useQuery } from '@tanstack/react-query';
import { getRequests } from '@/lib/api/requests';

export function useRequests() {
    return useQuery({
        queryKey: ['request'],
        queryFn: getRequests,
        staleTime: 5 * 60 * 1000,
    });
}
