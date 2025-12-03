import api from '../../api';
import { Charge, CreateChargeInput, UpdateChargeInput, ChargesActivity, CreateChargesActivityInput, UpdateChargesActivityInput } from './charges.types';

// ============ CHARGES ============

export const createCharge = async (data: CreateChargeInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/charges', data);
    return response.data;
};

export const getCharges = async (): Promise<Charge[]> => {
    const response = await api.get('/charges');
    return response.data;
};

export const getChargeById = async (id: string): Promise<Charge> => {
    const response = await api.get(`/charges/${id}`);
    return response.data;
};

export const getChargesLowStock = async (): Promise<Charge[]> => {
    const response = await api.get('/charges/low-stock');
    return response.data;
};

export const updateCharge = async (id: string, data: UpdateChargeInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/charges/${id}`, data);
    return response.data;
};

export const deleteCharge = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/charges/${id}`);
    return response.data;
};

// ============ CHARGES ACTIVITY ============

export const createChargesActivity = async (data: CreateChargesActivityInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/charges-activity', data);
    return response.data;
};

export const getChargesActivities = async (): Promise<ChargesActivity[]> => {
    const response = await api.get('/charges-activity');
    return response.data;
};

export const getChargesActivityById = async (id: string): Promise<ChargesActivity> => {
    const response = await api.get(`/charges-activity/${id}`);
    return response.data;
};

export const getChargesActivitiesByBookingId = async (bookingId: string): Promise<ChargesActivity[]> => {
    const response = await api.get(`/charges-activity/booking/${bookingId}`);
    return response.data;
};

export const updateChargesActivity = async (id: string, data: UpdateChargesActivityInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/charges-activity/${id}`, data);
    return response.data;
};

export const deleteChargesActivity = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/charges-activity/${id}`);
    return response.data;
};
