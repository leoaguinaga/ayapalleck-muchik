'use client';

import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/lib/api/users';

export function useProfile() {
    return useQuery({
        queryKey: ['user', 'profile'],
        queryFn: getProfile,
        staleTime: 5 * 60 * 1000,
    });
}
