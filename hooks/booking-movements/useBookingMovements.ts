'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingMovements } from '@/lib/api/booking-movements';

export function useBookingMovements() {
    return useQuery({
        queryKey: ['booking-movement'],
        queryFn: getBookingMovements,
        staleTime: 5 * 60 * 1000,
    });
}
