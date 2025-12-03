'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '@/lib/api/auth';

export function useSignUp() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            queryClient.invalidateQueries({ queryKey: ['session'] });
        },
    });
}
