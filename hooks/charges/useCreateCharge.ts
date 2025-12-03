'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCharge } from '@/lib/api/charges';

export function useCreateCharge() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createCharge,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['charge'] });
        },
    });
}
