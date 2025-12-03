import api from '../../api';
import { BookingMovement, CreateBookingMovementInput, UpdateBookingMovementInput } from './booking-movements.types';

export const createBookingMovement = async (data: CreateBookingMovementInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/booking-movement', data);
    return response.data;
};

export const getBookingMovements = async (): Promise<BookingMovement[]> => {
    const response = await api.get('/booking-movement');
    return response.data;
};

export const getBookingMovementById = async (id: string): Promise<BookingMovement> => {
    const response = await api.get(`/booking-movement/${id}`);
    return response.data;
};

export const getBookingMovementsByBookingId = async (bookingId: string): Promise<BookingMovement[]> => {
    const response = await api.get(`/booking-movement/booking/${bookingId}`);
    return response.data;
};

export const updateBookingMovement = async (id: string, data: UpdateBookingMovementInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/booking-movement/${id}`, data);
    return response.data;
};

export const deleteBookingMovement = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/booking-movement/${id}`);
    return response.data;
};
