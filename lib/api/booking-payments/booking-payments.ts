import api from '../../api';
import { 
    BookingPayment, 
    CreateBookingPaymentInput, 
    UpdateBookingPaymentInput,
    BookingPaymentActivity,
    CreateBookingPaymentActivityInput,
    UpdateBookingPaymentActivityInput
} from './booking-payments.types';

// ============ BOOKING PAYMENTS ============

export const createBookingPayment = async (data: CreateBookingPaymentInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/booking-payment', data);
    return response.data;
};

export const getBookingPayments = async (): Promise<BookingPayment[]> => {
    const response = await api.get('/booking-payment');
    return response.data;
};

export const getBookingPaymentById = async (id: string): Promise<BookingPayment> => {
    const response = await api.get(`/booking-payment/${id}`);
    return response.data;
};

export const getBookingPaymentsByBookingId = async (bookingId: string): Promise<BookingPayment[]> => {
    const response = await api.get(`/booking-payment/booking/${bookingId}`);
    return response.data;
};

export const updateBookingPayment = async (id: string, data: UpdateBookingPaymentInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/booking-payment/${id}`, data);
    return response.data;
};

export const deleteBookingPayment = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/booking-payment/${id}`);
    return response.data;
};

// ============ BOOKING PAYMENT ACTIVITIES ============

export const createBookingPaymentActivity = async (data: CreateBookingPaymentActivityInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/booking-payment-activity', data);
    return response.data;
};

export const getBookingPaymentActivities = async (): Promise<BookingPaymentActivity[]> => {
    const response = await api.get('/booking-payment-activity');
    return response.data;
};

export const getBookingPaymentActivityById = async (id: string): Promise<BookingPaymentActivity> => {
    const response = await api.get(`/booking-payment-activity/${id}`);
    return response.data;
};

export const getBookingPaymentActivitiesByBookingId = async (bookingId: string): Promise<BookingPaymentActivity[]> => {
    const response = await api.get(`/booking-payment-activity/booking/${bookingId}`);
    return response.data;
};

export const updateBookingPaymentActivity = async (id: string, data: UpdateBookingPaymentActivityInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/booking-payment-activity/${id}`, data);
    return response.data;
};

export const deleteBookingPaymentActivity = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/booking-payment-activity/${id}`);
    return response.data;
};
