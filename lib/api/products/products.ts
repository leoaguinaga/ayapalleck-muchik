import api from '../../api';
import { Product, CreateProductInput, UpdateProductInput, Movement, CreateMovementInput, UpdateMovementInput } from './products.types';

// ============ PRODUCTS ============

export const createProduct = async (data: CreateProductInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/product', data);
    return response.data;
};

export const getProducts = async (): Promise<Product[]> => {
    const response = await api.get('/product');
    return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
    const response = await api.get(`/product/${id}`);
    return response.data;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
    const response = await api.get(`/product/category/${category}`);
    return response.data;
};

export const getProductsLowStock = async (): Promise<Product[]> => {
    const response = await api.get('/product/low-stock');
    return response.data;
};

export const updateProduct = async (id: string, data: UpdateProductInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/product/${id}`, data);
    return response.data;
};

export const deleteProduct = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/product/${id}`);
    return response.data;
};

// ============ MOVEMENTS ============

export const createMovement = async (data: CreateMovementInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/movement', data);
    return response.data;
};

export const getMovements = async (): Promise<Movement[]> => {
    const response = await api.get('/movement');
    return response.data;
};

export const getMovementById = async (id: string): Promise<Movement> => {
    const response = await api.get(`/movement/${id}`);
    return response.data;
};

export const getMovementsByProductId = async (productId: string): Promise<Movement[]> => {
    const response = await api.get(`/movement/product/${productId}`);
    return response.data;
};

export const getMovementsByType = async (type: string): Promise<Movement[]> => {
    const response = await api.get(`/movement/type/${type}`);
    return response.data;
};

export const updateMovement = async (id: string, data: UpdateMovementInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/movement/${id}`, data);
    return response.data;
};

export const deleteMovement = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/movement/${id}`);
    return response.data;
};
