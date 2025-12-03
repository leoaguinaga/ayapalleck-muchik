import api from '../../api';
import { TaxDebt, CreateTaxDebtInput, UpdateTaxDebtInput } from './tax-debts.types';

export const createTaxDebt = async (data: CreateTaxDebtInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/tax-debt', data);
    return response.data;
};

export const getTaxDebts = async (): Promise<TaxDebt[]> => {
    const response = await api.get('/tax-debt');
    return response.data;
};

export const getTaxDebtById = async (id: string): Promise<TaxDebt> => {
    const response = await api.get(`/tax-debt/${id}`);
    return response.data;
};

export const getTaxDebtsByBookingId = async (bookingId: string): Promise<TaxDebt[]> => {
    const response = await api.get(`/tax-debt/booking/${bookingId}`);
    return response.data;
};

export const getTaxDebtsPending = async (): Promise<TaxDebt[]> => {
    const response = await api.get('/tax-debt/pending');
    return response.data;
};

export const updateTaxDebt = async (id: string, data: UpdateTaxDebtInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/tax-debt/${id}`, data);
    return response.data;
};

export const deleteTaxDebt = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/tax-debt/${id}`);
    return response.data;
};
