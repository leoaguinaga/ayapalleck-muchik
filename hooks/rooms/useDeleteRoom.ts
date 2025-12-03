'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRoom } from '@/lib/api/rooms';

export function useDeleteRoom() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteRoom(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['room'] });
        },
    });
}
