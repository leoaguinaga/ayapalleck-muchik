'use client';

import { useQuery } from '@tanstack/react-query';
import { getRooms } from '@/lib/api/rooms';

export function useRooms() {
    return useQuery({
        queryKey: ['room'],
        queryFn: getRooms,
        staleTime: 5 * 60 * 1000,
    });
}
