'use client';

import { useQuery } from '@tanstack/react-query';
import { getTaxDebtsByBookingId } from '@/lib/api/tax-debts';

export function useTaxDebtsByBooking(bookingId: string) {
    return useQuery({
        queryKey: ['tax-debt', 'booking', bookingId],
        queryFn: () => getTaxDebtsByBookingId(bookingId),
        enabled: !!bookingId,
        staleTime: 5 * 60 * 1000,
    });
}
