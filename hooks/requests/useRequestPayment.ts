'use client';

import { useQuery } from '@tanstack/react-query';
import { getRequestPaymentById } from '@/lib/api/requests';

export function useRequestPayment(id: string) {
    return useQuery({
        queryKey: ['request-payment', id],
        queryFn: () => getRequestPaymentById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
