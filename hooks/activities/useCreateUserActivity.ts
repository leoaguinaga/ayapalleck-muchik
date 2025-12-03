'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUserActivity } from '@/lib/api/activities';

export function useCreateUserActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createUserActivity,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-activity'] });
        },
    });
}
