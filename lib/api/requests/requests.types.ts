import { RequestStatus } from '../types';
import { RoomType } from '../room-types/room-types.types';
import { Room } from '../rooms/rooms.types';
import { User } from '../users/users.types';

export interface Request {
    id: string;
    roomTypeId: string;
    userId: string;
    roomId?: string | null;
    email: string;
    name: string;
    totalAmount: number;
    checkIn: string;
    checkOut: string;
    reason?: string | null;
    status: RequestStatus;
    available: boolean;
    createdAt: string;
    updatedAt: string;
    // Relaciones opcionales
    roomType?: RoomType;
    user?: User;
    room?: Room | null;
}

export interface CreateRequestInput {
    roomTypeId: string;
    userId: string;
    roomId?: string;
    email: string;
    name: string;
    totalAmount: number;
    checkIn: string;
    checkOut: string;
    reason?: string;
    status?: RequestStatus;
}

export interface UpdateRequestInput {
    roomTypeId?: string;
    roomId?: string;
    email?: string;
    name?: string;
    totalAmount?: number;
    checkIn?: string;
    checkOut?: string;
    reason?: string;
    status?: RequestStatus;
    available?: boolean;
}

// Request Activity
export interface RequestActivity {
    id: string;
    requestId: string;
    action: string;
    totalAmount?: number | null;
    checkIn?: string | null;
    checkOut?: string | null;
    status: RequestStatus;
    available: boolean;
    createdAt: string;
}

// Request Payment
export interface RequestPayment {
    id: string;
    requestId: string;
    amount: number;
    expirationDate?: string | null;
    wasPaid: boolean;
    paymentDate?: string | null;
    updatedAt: string;
}

export interface CreateRequestPaymentInput {
    requestId: string;
    amount: number;
    expirationDate?: string;
}

export interface UpdateRequestPaymentInput {
    amount?: number;
    expirationDate?: string;
    wasPaid?: boolean;
    paymentDate?: string;
}
