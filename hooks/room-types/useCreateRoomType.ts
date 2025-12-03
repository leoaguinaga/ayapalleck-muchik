'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRoomType } from '@/lib/api/room-types/room-types';

export function useCreateRoomType() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRoomType,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['room-type'] });
        },
    });
}