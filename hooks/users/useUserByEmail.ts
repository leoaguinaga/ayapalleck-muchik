'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserByEmail } from '@/lib/api/users';

export function useUserByEmail(email: string) {
    return useQuery({
        queryKey: ['user', 'email', email],
        queryFn: () => getUserByEmail(email),
        enabled: !!email,
        staleTime: 5 * 60 * 1000,
    });
}
