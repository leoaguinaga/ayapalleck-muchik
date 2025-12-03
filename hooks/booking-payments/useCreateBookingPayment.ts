'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBookingPayment } from '@/lib/api/booking-payments';

export function useCreateBookingPayment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBookingPayment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking-payment'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
