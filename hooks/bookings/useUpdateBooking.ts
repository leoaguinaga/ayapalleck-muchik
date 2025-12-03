'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking, UpdateBookingInput } from '@/lib/api/bookings';

type UpdateBookingParams = {
    id: string;
    data: UpdateBookingInput;
};

export function useUpdateBooking() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateBookingParams) => updateBooking(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['booking'] });
            queryClient.invalidateQueries({ queryKey: ['booking', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['room'] });
        },
    });
}
