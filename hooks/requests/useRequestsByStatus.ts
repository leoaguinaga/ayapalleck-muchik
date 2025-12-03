'use client';

import { useQuery } from '@tanstack/react-query';
import { getRequestsByStatus } from '@/lib/api/requests';

export function useRequestsByStatus(status: string) {
    return useQuery({
        queryKey: ['request', 'status', status],
        queryFn: () => getRequestsByStatus(status),
        enabled: !!status,
        staleTime: 5 * 60 * 1000,
    });
}
