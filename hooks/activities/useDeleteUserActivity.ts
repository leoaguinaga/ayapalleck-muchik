'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUserActivity } from '@/lib/api/activities';

export function useDeleteUserActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteUserActivity(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-activity'] });
        },
    });
}
