'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/lib/api/products';

export function useProduct(id: string) {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}
