import api from '../../api';
import { Request, CreateRequestInput, UpdateRequestInput, RequestPayment, CreateRequestPaymentInput, UpdateRequestPaymentInput } from './requests.types';

// ============ REQUESTS ============

export const createRequest = async (data: CreateRequestInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/request', data);
    return response.data;
};

export const getRequests = async (): Promise<Request[]> => {
    const response = await api.get('/request');
    return response.data;
};

export const getRequestById = async (id: string): Promise<Request> => {
    const response = await api.get(`/request/${id}`);
    return response.data;
};

export const getRequestsByStatus = async (status: string): Promise<Request[]> => {
    const response = await api.get(`/request/status/${status}`);
    return response.data;
};

export const updateRequest = async (id: string, data: UpdateRequestInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.put(`/request/${id}`, data);
    return response.data;
};

export const deleteRequest = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/request/${id}`);
    return response.data;
};

// ============ REQUEST PAYMENTS ============

export const createRequestPayment = async (data: CreateRequestPaymentInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/request-payment', data);
    return response.data;
};

export const getRequestPayments = async (): Promise<RequestPayment[]> => {
    const response = await api.get('/request-payment');
    return response.data;
};

export const getRequestPaymentById = async (id: string): Promise<RequestPayment> => {
    const response = await api.get(`/request-payment/${id}`);
    return response.data;
};

export const getRequestPaymentsByRequestId = async (requestId: string): Promise<RequestPayment[]> => {
    const response = await api.get(`/request-payment/request/${requestId}`);
    return response.data;
};

export const getRequestPaymentsPending = async (): Promise<RequestPayment[]> => {
    const response = await api.get('/request-payment/pending');
    return response.data;
};

export const updateRequestPayment = async (id: string, data: UpdateRequestPaymentInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/request-payment/${id}`, data);
    return response.data;
};

export const deleteRequestPayment = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/request-payment/${id}`);
    return response.data;
};
