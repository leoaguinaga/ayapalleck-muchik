import { ProductUnit } from '../types';
import { Booking } from '../bookings/bookings.types';

export interface Charge {
    id: string;
    name: string;
    unit: ProductUnit;
    unitPrice: number;
    description?: string | null;
    stock: number;
    minimumStock: number;
}

export interface CreateChargeInput {
    name: string;
    unit: ProductUnit;
    unitPrice: number;
    description?: string;
    stock: number;
    minimumStock: number;
}

export interface UpdateChargeInput {
    name?: string;
    unit?: ProductUnit;
    unitPrice?: number;
    description?: string;
    stock?: number;
    minimumStock?: number;
}

// Charges Activity
export interface ChargesActivity {
    id: string;
    chargeId: string;
    bookingId: string;
    amount: number;
    // Relaciones opcionales
    charge?: Charge;
    booking?: Booking;
}

export interface CreateChargesActivityInput {
    chargeId: string;
    bookingId: string;
    amount: number;
}

export interface UpdateChargesActivityInput {
    amount?: number;
}
