import { User } from '../users/users.types';

// Session
export interface Session {
    id: string;
    expiresAt: string;
    token: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    userId: string;
    createdAt: string;
    updatedAt: string;
    // Relación opcional
    user?: User;
}

// Account
export interface Account {
    id: string;
    accountId: string;
    providerId: string;
    userId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    idToken?: string | null;
    accessTokenExpiresAt?: string | null;
    refreshTokenExpiresAt?: string | null;
    scope?: string | null;
    password?: string | null;
    createdAt: string;
    updatedAt: string;
    // Relación opcional
    user?: User;
}

// Verification
export interface Verification {
    id: string;
    identifier: string;
    value: string;
    expiresAt: string;
    createdAt: string;
    updatedAt: string;
}
