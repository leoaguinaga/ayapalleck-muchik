import { Shift, UserRole } from '../types';

export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    shift?: Shift | null;
    image?: string | null;
    role: UserRole;
    available: boolean;
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreateUserInput {
    name: string;
    email: string;
    phone?: string;
    shift?: Shift;
    image?: string;
    role?: UserRole;
}

export interface UpdateUserInput {
    name?: string;
    email?: string;
    phone?: string;
    shift?: Shift;
    image?: string;
    role?: UserRole;
    available?: boolean;
}
