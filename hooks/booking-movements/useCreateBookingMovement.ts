'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBookingMovement } from '@/lib/api/booking-movements';

export function useCreateBookingMovement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBookingMovement,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking-movement'] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
