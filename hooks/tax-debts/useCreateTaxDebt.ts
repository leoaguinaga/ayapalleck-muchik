'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTaxDebt } from '@/lib/api/tax-debts';

export function useCreateTaxDebt() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTaxDebt,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tax-debt'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
