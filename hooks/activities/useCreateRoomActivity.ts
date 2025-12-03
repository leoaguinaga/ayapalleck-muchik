'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRoomActivity } from '@/lib/api/activities';

export function useCreateRoomActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRoomActivity,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['room-activity'] });
        },
    });
}
