'use client';

import { useQuery } from '@tanstack/react-query';
import { getRoomById } from '@/lib/api/rooms';

export function useRoom(id: string) {
    return useQuery({
        queryKey: ['room', id],
        queryFn: () => getRoomById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
