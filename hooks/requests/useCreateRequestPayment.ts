'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRequestPayment } from '@/lib/api/requests';

export function useCreateRequestPayment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRequestPayment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['request-payment'] });
        },
    });
}
