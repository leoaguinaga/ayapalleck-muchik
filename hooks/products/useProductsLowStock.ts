'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductsLowStock } from '@/lib/api/products';

export function useProductsLowStock() {
    return useQuery({
        queryKey: ['product', 'low-stock'],
        queryFn: getProductsLowStock,
        staleTime: 5 * 60 * 1000,
    });
}
