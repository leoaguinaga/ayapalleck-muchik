'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTaxDebt, UpdateTaxDebtInput } from '@/lib/api/tax-debts';

type UpdateTaxDebtParams = {
    id: string;
    data: UpdateTaxDebtInput;
};

export function useUpdateTaxDebt() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateTaxDebtParams) => updateTaxDebt(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['tax-debt'] });
            queryClient.invalidateQueries({ queryKey: ['tax-debt', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
