import { BookingMethod, BookingStatus } from '../types';
import { Customer } from '../customers/customers.types';
import { Room } from '../rooms/rooms.types';
import { User } from '../users/users.types';

export interface Booking {
    id: string;
    customerId: string;
    roomId: string;
    userId: string;
    method: BookingMethod;
    checkIn: string;
    checkOut: string;
    totalAmount: number;
    discount?: number | null;
    advance?: number | null;
    taxDebt?: number | null;
    status: BookingStatus;
    available: boolean;
    createdAt: string;
    updatedAt: string;
    // Relaciones opcionales
    customer?: Customer;
    room?: Room;
    user?: User;
}

export interface CreateBookingInput {
    customerId: string;
    roomId: string;
    userId: string;
    method: BookingMethod;
    checkIn: string;
    checkOut: string;
    totalAmount: number;
    discount?: number;
    advance?: number;
    taxDebt?: number;
    status?: BookingStatus;
}

export interface UpdateBookingInput {
    customerId?: string;
    roomId?: string;
    method?: BookingMethod;
    checkIn?: string;
    checkOut?: string;
    totalAmount?: number;
    discount?: number;
    advance?: number;
    taxDebt?: number;
    status?: BookingStatus;
    available?: boolean;
}
