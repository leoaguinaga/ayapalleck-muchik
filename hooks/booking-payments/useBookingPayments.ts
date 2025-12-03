'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingPayments } from '@/lib/api/booking-payments';

export function useBookingPayments() {
    return useQuery({
        queryKey: ['booking-payment'],
        queryFn: getBookingPayments,
        staleTime: 5 * 60 * 1000,
    });
}
