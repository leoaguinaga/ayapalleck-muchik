'use client';

import { useQuery } from '@tanstack/react-query';
import { getSession } from '@/lib/api/auth';

export function useSession() {
    return useQuery({
        queryKey: ['session'],
        queryFn: getSession,
        staleTime: 5 * 60 * 1000,
        retry: false,
    });
}
