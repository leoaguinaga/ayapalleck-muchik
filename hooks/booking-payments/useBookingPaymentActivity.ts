'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingPaymentActivityById } from '@/lib/api/booking-payments';

export function useBookingPaymentActivity(id: string) {
    return useQuery({
        queryKey: ['booking-payment-activity', id],
        queryFn: () => getBookingPaymentActivityById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
