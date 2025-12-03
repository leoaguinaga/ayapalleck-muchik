'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useSignOut() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            localStorage.removeItem('token');
            return { success: true };
        },
        onSuccess: () => {
            queryClient.clear();
        },
    });
}
