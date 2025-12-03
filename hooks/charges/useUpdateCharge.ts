'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCharge, UpdateChargeInput } from '@/lib/api/charges';

type UpdateChargeParams = {
    id: string;
    data: UpdateChargeInput;
};

export function useUpdateCharge() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateChargeParams) => updateCharge(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['charge'] });
            queryClient.invalidateQueries({ queryKey: ['charge', variables.id] });
        },
    });
}
