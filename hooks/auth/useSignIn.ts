'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from '@/lib/api/auth';

export function useSignIn() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            queryClient.invalidateQueries({ queryKey: ['session'] });
        },
    });
}
