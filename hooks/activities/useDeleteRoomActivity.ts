'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRoomActivity } from '@/lib/api/activities';

export function useDeleteRoomActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteRoomActivity(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['room-activity'] });
        },
    });
}
