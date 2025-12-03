'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBookingPaymentActivity } from '@/lib/api/booking-payments';

export function useCreateBookingPaymentActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBookingPaymentActivity,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking-payment-activity'] });
            queryClient.invalidateQueries({ queryKey: ['booking-payment'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
