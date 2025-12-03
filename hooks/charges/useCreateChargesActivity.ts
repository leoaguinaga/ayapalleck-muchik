'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChargesActivity } from '@/lib/api/charges';

export function useCreateChargesActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createChargesActivity,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['charges-activity'] });
            queryClient.invalidateQueries({ queryKey: ['charge'] });
        },
    });
}
