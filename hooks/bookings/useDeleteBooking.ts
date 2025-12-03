'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking } from '@/lib/api/bookings';

export function useDeleteBooking() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteBooking(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booking'] });
            queryClient.invalidateQueries({ queryKey: ['room'] });
        },
    });
}
