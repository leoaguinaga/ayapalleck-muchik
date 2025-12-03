'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/api/products';

export function useProducts() {
    return useQuery({
        queryKey: ['product'],
        queryFn: getProducts,
        staleTime: 5 * 60 * 1000,
    });
}
