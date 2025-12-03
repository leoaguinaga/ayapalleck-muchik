import api from '../../api';
import { Customer, CreateCustomerInput, UpdateCustomerInput } from './customers.types';

export const createCustomer = async (data: CreateCustomerInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/customer', data);
    return response.data;
};

export const getCustomers = async (): Promise<Customer[]> => {
    const response = await api.get('/customer');
    return response.data;
};

export const getCustomerById = async (id: string): Promise<Customer> => {
    const response = await api.get(`/customer/${id}`);
    return response.data;
};

export const updateCustomer = async (id: string, data: UpdateCustomerInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/customer/${id}`, data);
    return response.data;
};

export const deleteCustomer = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/customer/${id}`);
    return response.data;
};
