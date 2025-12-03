'use client';

import { useQuery } from '@tanstack/react-query';
import { getMovementById } from '@/lib/api/products';

export function useMovement(id: string) {
    return useQuery({
        queryKey: ['movement', id],
        queryFn: () => getMovementById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
