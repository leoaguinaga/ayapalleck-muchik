'use client';

import { useQuery } from '@tanstack/react-query';
import { getRoomActivitiesByRoomId } from '@/lib/api/activities';

export function useRoomActivitiesByRoom(roomId: string) {
    return useQuery({
        queryKey: ['room-activity', 'room', roomId],
        queryFn: () => getRoomActivitiesByRoomId(roomId),
        enabled: !!roomId,
        staleTime: 5 * 60 * 1000,
    });
}
