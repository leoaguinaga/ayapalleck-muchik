import { ProductCategory, ProductUnit, MovementType } from '../types';
import { User } from '../users/users.types';

export interface Product {
    id: string;
    name: string;
    category: ProductCategory;
    unit: ProductUnit;
    unitPrice: number;
    description?: string | null;
    stock: number;
    minimumStock: number;
}

export interface CreateProductInput {
    name: string;
    category: ProductCategory;
    unit: ProductUnit;
    unitPrice: number;
    description?: string;
    stock: number;
    minimumStock: number;
}

export interface UpdateProductInput {
    name?: string;
    category?: ProductCategory;
    unit?: ProductUnit;
    unitPrice?: number;
    description?: string;
    stock?: number;
    minimumStock?: number;
}

// Movement
export interface Movement {
    id: string;
    productId: string;
    userId: string;
    type: MovementType;
    quantity: number;
    reason?: string | null;
    notes?: string | null;
    available: boolean;
    createdAt: string;
    updatedAt: string;
    // Relaciones opcionales
    product?: Product;
    user?: User;
}

export interface CreateMovementInput {
    productId: string;
    userId: string;
    type: MovementType;
    quantity: number;
    reason?: string;
    notes?: string;
}

export interface UpdateMovementInput {
    type?: MovementType;
    quantity?: number;
    reason?: string;
    notes?: string;
    available?: boolean;
}
