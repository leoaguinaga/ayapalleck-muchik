'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTaxDebt } from '@/lib/api/tax-debts';

export function useDeleteTaxDebt() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteTaxDebt(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tax-debt'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
