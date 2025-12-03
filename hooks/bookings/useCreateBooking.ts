'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBooking } from '@/lib/api/bookings';

export function useCreateBooking() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBooking,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking'] });
            queryClient.invalidateQueries({ queryKey: ['room'] });
        },
    });
}
