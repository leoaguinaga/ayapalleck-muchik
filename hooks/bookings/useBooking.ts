'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingById } from '@/lib/api/bookings';

export function useBooking(id: string) {
    return useQuery({
        queryKey: ['booking', id],
        queryFn: () => getBookingById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
