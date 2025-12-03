'use client';

import { useQuery } from '@tanstack/react-query';
import { getChargesActivitiesByBookingId } from '@/lib/api/charges';

export function useChargesActivitiesByBooking(bookingId: string) {
    return useQuery({
        queryKey: ['charges-activity', 'booking', bookingId],
        queryFn: () => getChargesActivitiesByBookingId(bookingId),
        enabled: !!bookingId,
        staleTime: 5 * 60 * 1000,
    });
}
