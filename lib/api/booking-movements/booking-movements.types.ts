import { Booking } from '../bookings/bookings.types';
import { User } from '../users/users.types';
import { Movement } from '../products/products.types';

export interface BookingMovement {
    id: string;
    bookingId: string;
    userId: string;
    movementId: string;
    wasPaid: boolean;
    available: boolean;
    createdAt: string;
    updatedAt?: string | null;
    // Relaciones opcionales
    booking?: Booking;
    user?: User;
    movement?: Movement;
}

export interface CreateBookingMovementInput {
    bookingId: string;
    userId: string;
    movementId: string;
    wasPaid?: boolean;
    createdAt?: string;
}

export interface UpdateBookingMovementInput {
    wasPaid?: boolean;
    available?: boolean;
}
