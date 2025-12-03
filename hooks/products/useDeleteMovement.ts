'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMovement } from '@/lib/api/products';

export function useDeleteMovement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteMovement(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movement'] });
            queryClient.invalidateQueries({ queryKey: ['product'] });
        },
    });
}
