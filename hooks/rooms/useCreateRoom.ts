'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRoom } from '@/lib/api/rooms';

export function useCreateRoom() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRoom,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['room'] });
        },
    });
}
