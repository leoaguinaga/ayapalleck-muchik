'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBookingMovement } from '@/lib/api/booking-movements';

export function useDeleteBookingMovement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteBookingMovement(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking-movement'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
