'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRequestPayment } from '@/lib/api/requests';

export function useDeleteRequestPayment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteRequestPayment(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['request-payment'] });
        },
    });
}
