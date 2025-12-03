'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateChargesActivity, UpdateChargesActivityInput } from '@/lib/api/charges';

type UpdateChargesActivityParams = {
    id: string;
    data: UpdateChargesActivityInput;
};

export function useUpdateChargesActivity() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateChargesActivityParams) => updateChargesActivity(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['charges-activity'] });
            queryClient.invalidateQueries({ queryKey: ['charges-activity', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['charge'] });
        },
    });
}
