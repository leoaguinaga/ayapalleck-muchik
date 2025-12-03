'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBookingPaymentActivity } from '@/lib/api/booking-payments';

export function useDeleteBookingPaymentActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteBookingPaymentActivity(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking-payment-activity'] });
            queryClient.invalidateQueries({ queryKey: ['booking-payment'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
