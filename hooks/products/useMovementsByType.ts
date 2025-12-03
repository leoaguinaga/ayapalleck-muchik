'use client';

import { useQuery } from '@tanstack/react-query';
import { getMovementsByType } from '@/lib/api/products';

export function useMovementsByType(type: string) {
    return useQuery({
        queryKey: ['movement', 'type', type],
        queryFn: () => getMovementsByType(type),
        enabled: !!type,
        staleTime: 5 * 60 * 1000,
    });
}
