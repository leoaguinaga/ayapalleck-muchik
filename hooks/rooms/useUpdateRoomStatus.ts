'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRoomStatus } from '@/lib/api/rooms';
import { RoomStatus } from '@/lib/api/rooms';

type UpdateRoomStatusParams = {
    id: string;
    status: RoomStatus;
};

export function useUpdateRoomStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, status }: UpdateRoomStatusParams) => updateRoomStatus(id, status),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['room'] });
            queryClient.invalidateQueries({ queryKey: ['room', variables.id] });
        },
    });
}
