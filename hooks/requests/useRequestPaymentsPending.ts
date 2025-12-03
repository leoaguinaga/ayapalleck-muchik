'use client';

import { useQuery } from '@tanstack/react-query';
import { getRequestPaymentsPending } from '@/lib/api/requests';

export function useRequestPaymentsPending() {
    return useQuery({
        queryKey: ['request-payment', 'pending'],
        queryFn: getRequestPaymentsPending,
        staleTime: 5 * 60 * 1000,
    });
}
