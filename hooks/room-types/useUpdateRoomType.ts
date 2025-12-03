'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRoomType } from '@/lib/api/room-types/room-types';

type UpdateRoomTypeParams = {
    id: string;
    data: { name?: string; price?: number; description?: string };
};

export function useUpdateRoomType() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateRoomTypeParams) => updateRoomType(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['room-type'] });
            queryClient.invalidateQueries({ queryKey: ['room-type', variables.id] });
        },
    });
}
