// Tipos y enums compartidos basados en el schema de Prisma

// ============ ENUMS ============

export type RoomStatus = 'AVAILABLE' | 'OCCUPIED' | 'DIRTY';

export type BookingMethod = 'PER_NIGHT' | 'PER_HOUR';

export type BookingStatus = 'PENDING' | 'CHECK_IN' | 'CHECK_OUT' | 'CANCELED';

export type RequestStatus = 'PENDING' | 'ACCEPTED' | 'CANCELED';

export type Shift = 'MORNING' | 'AFTERNOON' | 'NIGHT';

export type UserRole = 'ADMIN' | 'RECEPTIONIST' | 'HOUSEKEEPING';

export type MovementType = 'SALE' | 'STORAGE';

export type ProductUnit = 'UNIT' | 'PACKAGE' | 'BOX' | 'SET' | 'ROLL' | 'LITER' | 'KILOGRAM';

export type ProductCategory = 'SALE' | 'STORAGE';

export type UserAction = 
    | 'LOG_IN' 
    | 'LOG_OUT' 
    | 'CHECK_IN' 
    | 'CHECK_OUT' 
    | 'UPDATE_BOOKING' 
    | 'CREATE_ROOM' 
    | 'UPDATE_ROOM';

// ============ UTILIDADES ============

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export interface ApiError {
    success: false;
    message: string;
    errors?: Record<string, string[]>;
}
