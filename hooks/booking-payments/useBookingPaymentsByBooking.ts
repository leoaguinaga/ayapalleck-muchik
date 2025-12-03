'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingPaymentsByBookingId } from '@/lib/api/booking-payments';

export function useBookingPaymentsByBooking(bookingId: string) {
    return useQuery({
        queryKey: ['booking-payment', 'booking', bookingId],
        queryFn: () => getBookingPaymentsByBookingId(bookingId),
        enabled: !!bookingId,
        staleTime: 5 * 60 * 1000,
    });
}
