'use client';

import { useQuery } from '@tanstack/react-query';
import { getMovements } from '@/lib/api/products';

export function useMovements() {
    return useQuery({
        queryKey: ['movement'],
        queryFn: getMovements,
        staleTime: 5 * 60 * 1000,
    });
}
