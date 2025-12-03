'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingMovementById } from '@/lib/api/booking-movements';

export function useBookingMovement(id: string) {
    return useQuery({
        queryKey: ['booking-movement', id],
        queryFn: () => getBookingMovementById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
