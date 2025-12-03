'use client';

import { useQuery } from '@tanstack/react-query';
import { getMovementsByProductId } from '@/lib/api/products';

export function useMovementsByProduct(productId: string) {
    return useQuery({
        queryKey: ['movement', 'product', productId],
        queryFn: () => getMovementsByProductId(productId),
        enabled: !!productId,
        staleTime: 5 * 60 * 1000,
    });
}
