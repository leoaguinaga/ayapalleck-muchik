'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingPaymentActivity, UpdateBookingPaymentActivityInput } from '@/lib/api/booking-payments';

type UpdateBookingPaymentActivityParams = {
    id: string;
    data: UpdateBookingPaymentActivityInput;
};

export function useUpdateBookingPaymentActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateBookingPaymentActivityParams) => updateBookingPaymentActivity(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['booking-payment-activity'] });
            queryClient.invalidateQueries({ queryKey: ['booking-payment-activity', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['booking-payment'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
