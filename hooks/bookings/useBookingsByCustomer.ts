'use client';

import { useQuery } from '@tanstack/react-query';
import { getBookingsByCustomerId } from '@/lib/api/bookings';

export function useBookingsByCustomer(customerId: string) {
    return useQuery({
        queryKey: ['booking', 'customer', customerId],
        queryFn: () => getBookingsByCustomerId(customerId),
        enabled: !!customerId,
        staleTime: 5 * 60 * 1000,
    });
}
