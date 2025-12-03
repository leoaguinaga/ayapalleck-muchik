'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteChargesActivity } from '@/lib/api/charges';

export function useDeleteChargesActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteChargesActivity(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['charges-activity'] });
            queryClient.invalidateQueries({ queryKey: ['charge'] });
        },
    });
}
