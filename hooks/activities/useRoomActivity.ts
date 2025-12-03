'use client';

import { useQuery } from '@tanstack/react-query';
import { getRoomActivityById } from '@/lib/api/activities';

export function useRoomActivity(id: string) {
    return useQuery({
        queryKey: ['room-activity', id],
        queryFn: () => getRoomActivityById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
