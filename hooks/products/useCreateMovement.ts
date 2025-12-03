'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMovement } from '@/lib/api/products';

export function useCreateMovement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createMovement,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movement'] });
            queryClient.invalidateQueries({ queryKey: ['product'] });
        },
    });
}
