'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingPayment, UpdateBookingPaymentInput } from '@/lib/api/booking-payments';

type UpdateBookingPaymentParams = {
    id: string;
    data: UpdateBookingPaymentInput;
};

export function useUpdateBookingPayment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateBookingPaymentParams) => updateBookingPayment(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['booking-payment'] });
            queryClient.invalidateQueries({ queryKey: ['booking-payment', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
