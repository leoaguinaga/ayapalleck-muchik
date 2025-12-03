'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/lib/api/users';

export function useUser(id: string) {
    return useQuery({
        queryKey: ['user', id],
        queryFn: () => getUserById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
