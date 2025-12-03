'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookings } from '@/lib/api/bookings';

export function useBookings() {
    return useQuery({
        queryKey: ['booking'],
        queryFn: getBookings,
        staleTime: 5 * 60 * 1000,
    });
}
