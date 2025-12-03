'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '@/lib/api/products';

export function useProductsByCategory(category: string) {
    return useQuery({
        queryKey: ['product', 'category', category],
        queryFn: () => getProductsByCategory(category),
        enabled: !!category,
        staleTime: 5 * 60 * 1000,
    });
}
