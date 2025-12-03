'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCharge } from '@/lib/api/charges';

export function useDeleteCharge() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteCharge(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['charge'] });
        },
    });
}
