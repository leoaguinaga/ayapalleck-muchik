'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRequest } from '@/lib/api/requests';

export function useCreateRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['request'] });
        },
    });
}
