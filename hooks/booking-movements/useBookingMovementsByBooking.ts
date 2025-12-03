'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingMovementsByBookingId } from '@/lib/api/booking-movements';

export function useBookingMovementsByBooking(bookingId: string) {
    return useQuery({
        queryKey: ['booking-movement', 'booking', bookingId],
        queryFn: () => getBookingMovementsByBookingId(bookingId),
        enabled: !!bookingId,
        staleTime: 5 * 60 * 1000,
    });
}
