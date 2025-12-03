'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCustomer, UpdateCustomerInput } from '@/lib/api/customers';

type UpdateCustomerParams = {
    id: string;
    data: UpdateCustomerInput;
};

export function useUpdateCustomer() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateCustomerParams) => updateCustomer(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['customer'] });
            queryClient.invalidateQueries({ queryKey: ['customer', variables.id] });
        },
    });
}
