'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRequestPayment, UpdateRequestPaymentInput } from '@/lib/api/requests';

type UpdateRequestPaymentParams = {
    id: string;
    data: UpdateRequestPaymentInput;
};

export function useUpdateRequestPayment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateRequestPaymentParams) => updateRequestPayment(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['request-payment'] });
            queryClient.invalidateQueries({ queryKey: ['request-payment', variables.id] });
        },
    });
}
