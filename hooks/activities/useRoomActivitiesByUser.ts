'use client';

import { useQuery } from '@tanstack/react-query';
import { getRoomActivitiesByUserId } from '@/lib/api/activities';

export function useRoomActivitiesByUser(userId: string) {
    return useQuery({
        queryKey: ['room-activity', 'user', userId],
        queryFn: () => getRoomActivitiesByUserId(userId),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
    });
}
