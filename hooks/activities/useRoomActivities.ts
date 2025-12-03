'use client';

import { useQuery } from '@tanstack/react-query';
import { getRoomActivities } from '@/lib/api/activities';

export function useRoomActivities() {
    return useQuery({
        queryKey: ['room-activity'],
        queryFn: getRoomActivities,
        staleTime: 5 * 60 * 1000,
    });
}
