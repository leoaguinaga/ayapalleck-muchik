'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBookingMovement, UpdateBookingMovementInput } from '@/lib/api/booking-movements';

type UpdateBookingMovementParams = {
    id: string;
    data: UpdateBookingMovementInput;
};

export function useUpdateBookingMovement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateBookingMovementParams) => updateBookingMovement(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['booking-movement'] });
            queryClient.invalidateQueries({ queryKey: ['booking-movement', variables.id] });
            queryClient.invalidateQueries({ queryKey: ['booking'] });
        },
    });
}
