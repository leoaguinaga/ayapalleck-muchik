'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingPaymentById } from '@/lib/api/booking-payments';

export function useBookingPayment(id: string) {
    return useQuery({
        queryKey: ['booking-payment', id],
        queryFn: () => getBookingPaymentById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
