import { Booking } from '../bookings/bookings.types';
import { User } from '../users/users.types';

export interface TaxDebt {
    id: string;
    bookingId: string;
    userId: string;
    amount: number;
    wasPaid: boolean;
    available: boolean;
    createdAt?: string | null;
    updatedAt?: string | null;
    // Relaciones opcionales
    booking?: Booking;
    user?: User;
}

export interface CreateTaxDebtInput {
    bookingId: string;
    userId: string;
    amount: number;
    wasPaid?: boolean;
}

export interface UpdateTaxDebtInput {
    amount?: number;
    wasPaid?: boolean;
    available?: boolean;
}
