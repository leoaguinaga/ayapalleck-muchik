'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserActivityById } from '@/lib/api/activities';

export function useUserActivity(id: string) {
    return useQuery({
        queryKey: ['user-activity', id],
        queryFn: () => getUserActivityById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
