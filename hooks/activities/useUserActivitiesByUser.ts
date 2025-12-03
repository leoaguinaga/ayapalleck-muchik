'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserActivitiesByUserId } from '@/lib/api/activities';

export function useUserActivitiesByUser(userId: string) {
    return useQuery({
        queryKey: ['user-activity', 'user', userId],
        queryFn: () => getUserActivitiesByUserId(userId),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
    });
}
