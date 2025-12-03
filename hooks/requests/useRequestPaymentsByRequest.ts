'use client';

import { useQuery } from '@tanstack/react-query';
import { getRequestPaymentsByRequestId } from '@/lib/api/requests';

export function useRequestPaymentsByRequest(requestId: string) {
    return useQuery({
        queryKey: ['request-payment', 'request', requestId],
        queryFn: () => getRequestPaymentsByRequestId(requestId),
        enabled: !!requestId,
        staleTime: 5 * 60 * 1000,
    });
}
