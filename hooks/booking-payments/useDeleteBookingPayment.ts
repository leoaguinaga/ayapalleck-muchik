'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBookingPayment } from '@/lib/api/booking-payments';

export function useDeleteBookingPayment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteBookingPayment(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking-payment'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
