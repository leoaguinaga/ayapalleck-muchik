'use client';

import { useQuery } from '@tanstack/react-query';
import { getRoomTypeById } from '@/lib/api/room-types/room-types';

export function useRoomType(id: string) {
    return useQuery({
        queryKey: ['room-type', id],
        queryFn: () => getRoomTypeById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
