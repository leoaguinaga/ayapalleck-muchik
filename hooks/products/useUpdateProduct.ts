'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct, UpdateProductInput } from '@/lib/api/products';

type UpdateProductParams = {
    id: string;
    data: UpdateProductInput;
};

export function useUpdateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateProductParams) => updateProduct(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['product'] });
            queryClient.invalidateQueries({ queryKey: ['product', variables.id] });
        },
    });
}
