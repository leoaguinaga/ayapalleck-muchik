'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMovement, UpdateMovementInput } from '@/lib/api/products';

type UpdateMovementParams = {
    id: string;
    data: UpdateMovementInput;
};

export function useUpdateMovement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateMovementParams) => updateMovement(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['movement'] });
            queryClient.invalidateQueries({ queryKey: ['movement', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['product'] });
        },
    });
}
