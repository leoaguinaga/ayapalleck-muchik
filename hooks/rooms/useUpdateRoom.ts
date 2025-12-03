'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRoom } from '@/lib/api/rooms';
import { UpdateRoomInput } from '@/lib/api/rooms';

type UpdateRoomParams = {
    id: string;
    data: UpdateRoomInput;
};

export function useUpdateRoom() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateRoomParams) => updateRoom(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['room'] });
            queryClient.invalidateQueries({ queryKey: ['room', variables.id] });
        },
    });
}
