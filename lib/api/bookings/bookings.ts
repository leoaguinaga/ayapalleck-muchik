import api from '../../api';
import { Booking, CreateBookingInput, UpdateBookingInput } from './bookings.types';

export const createBooking = async (data: CreateBookingInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/booking', data);
    return response.data;
};

export const getBookings = async (): Promise<Booking[]> => {
    const response = await api.get('/booking');
    return response.data;
};

export const getBookingById = async (id: string): Promise<Booking> => {
    const response = await api.get(`/booking/${id}`);
    return response.data;
};

export const getBookingsByCustomerId = async (customerId: string): Promise<Booking[]> => {
    const response = await api.get(`/booking/customer/${customerId}`);
    return response.data;
};

export const updateBooking = async (id: string, data: UpdateBookingInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/booking/${id}`, data);
    return response.data;
};

export const deleteBooking = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/booking/${id}`);
    return response.data;
};
