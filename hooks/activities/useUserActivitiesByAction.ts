'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserActivitiesByAction } from '@/lib/api/activities';

export function useUserActivitiesByAction(action: string) {
    return useQuery({
        queryKey: ['user-activity', 'action', action],
        queryFn: () => getUserActivitiesByAction(action),
        enabled: !!action,
        staleTime: 5 * 60 * 1000,
    });
}
