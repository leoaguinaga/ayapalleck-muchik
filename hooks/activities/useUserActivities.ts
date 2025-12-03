'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserActivities } from '@/lib/api/activities';

export function useUserActivities() {
    return useQuery({
        queryKey: ['user-activity'],
        queryFn: getUserActivities,
        staleTime: 5 * 60 * 1000,
    });
}
