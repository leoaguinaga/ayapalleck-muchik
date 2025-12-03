'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser, UpdateUserInput } from '@/lib/api/users';

type UpdateUserParams = {
    id: string;
    data: UpdateUserInput;
};

export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateUserParams) => updateUser(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            queryClient.invalidateQueries({ queryKey: ['user', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
        },
    });
}
