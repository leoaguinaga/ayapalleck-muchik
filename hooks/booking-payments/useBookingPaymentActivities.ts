'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingPaymentActivities } from '@/lib/api/booking-payments';

export function useBookingPaymentActivities() {
    return useQuery({
        queryKey: ['booking-payment-activity'],
        queryFn: getBookingPaymentActivities,
        staleTime: 5 * 60 * 1000,
    });
}
