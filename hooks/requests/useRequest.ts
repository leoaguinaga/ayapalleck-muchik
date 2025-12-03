'use client';

import { useQuery } from '@tanstack/react-query';
import { getRequestById } from '@/lib/api/requests';

export function useRequest(id: string) {
    return useQuery({
        queryKey: ['request', id],
        queryFn: () => getRequestById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
