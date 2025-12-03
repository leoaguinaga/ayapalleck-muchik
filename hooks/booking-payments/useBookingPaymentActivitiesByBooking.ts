'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingPaymentActivitiesByBookingId } from '@/lib/api/booking-payments';

export function useBookingPaymentActivitiesByBooking(bookingId: string) {
    return useQuery({
        queryKey: ['booking-payment-activity', 'booking', bookingId],
        queryFn: () => getBookingPaymentActivitiesByBookingId(bookingId),
        enabled: !!bookingId,
        staleTime: 5 * 60 * 1000,
    });
}
