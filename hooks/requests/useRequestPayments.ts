'use client';

import { useQuery } from '@tanstack/react-query';
import { getRequestPayments } from '@/lib/api/requests';

export function useRequestPayments() {
    return useQuery({
        queryKey: ['request-payment'],
        queryFn: getRequestPayments,
        staleTime: 5 * 60 * 1000,
    });
}
