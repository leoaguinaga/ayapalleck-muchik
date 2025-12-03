'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRequest } from '@/lib/api/requests';

export function useDeleteRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteRequest(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['request'] });
        },
    });
}
