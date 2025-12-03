'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRoomType } from '@/lib/api/room-types/room-types';

export function useDeleteRoomType() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteRoomType(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['room-type'] });
        },
    });
}
