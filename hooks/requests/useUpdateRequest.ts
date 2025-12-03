'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRequest, UpdateRequestInput } from '@/lib/api/requests';

type UpdateRequestParams = {
    id: string;
    data: UpdateRequestInput;
};

export function useUpdateRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateRequestParams) => updateRequest(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['request'] });
            queryClient.invalidateQueries({ queryKey: ['request', variables.id] });
        },
    });
}
