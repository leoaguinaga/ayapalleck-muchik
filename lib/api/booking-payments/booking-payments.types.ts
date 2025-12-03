import { Booking } from '../bookings/bookings.types';
import { User } from '../users/users.types';

// Booking Payment
export interface BookingPayment {
    id: string;
    bookingId: string;
    userId: string;
    wasPaid: boolean;
    createdAt: string;
    updatedAt?: string | null;
    // Relaciones opcionales
    booking?: Booking;
    user?: User;
}

export interface CreateBookingPaymentInput {
    bookingId: string;
    userId: string;
    wasPaid?: boolean;
    createdAt?: string;
}

export interface UpdateBookingPaymentInput {
    wasPaid?: boolean;
}

// Booking Payment Activity
export interface BookingPaymentActivity {
    id: string;
    bookingId: string;
    userId: string;
    type?: string | null;
    amount: number;
    wasPaid: boolean;
    createdAt: string;
    updatedAt?: string | null;
    // Relaciones opcionales
    booking?: Booking;
    user?: User;
}

export interface CreateBookingPaymentActivityInput {
    bookingId: string;
    userId: string;
    type?: string;
    amount: number;
    wasPaid?: boolean;
    createdAt?: string;
}

export interface UpdateBookingPaymentActivityInput {
    type?: string;
    amount?: number;
    wasPaid?: boolean;
}
