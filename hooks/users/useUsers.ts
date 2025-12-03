'use client';

import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/lib/api/users';

export function useUsers() {
    return useQuery({
        queryKey: ['user'],
        queryFn: getUsers,
        staleTime: 5 * 60 * 1000,
    });
}
