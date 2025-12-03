'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCustomer } from '@/lib/api/customers';

export function useDeleteCustomer() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteCustomer(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['customer'] });
        },
    });
}
