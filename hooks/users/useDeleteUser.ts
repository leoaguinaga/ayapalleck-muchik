'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/lib/api/users';

export function useDeleteUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });
}
