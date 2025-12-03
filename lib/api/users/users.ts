import api from '../../api';
import { User, UpdateUserInput } from './users.types';

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get('/user');
    return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
    const response = await api.get(`/user/${id}`);
    return response.data;
};

export const getUserByEmail = async (email: string): Promise<User> => {
    const response = await api.get(`/user/email/${email}`);
    return response.data;
};

export const getProfile = async (): Promise<User> => {
    const response = await api.get('/user/me');
    return response.data;
};

export const updateUser = async (id: string, data: UpdateUserInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.patch(`/user/${id}`, data);
    return response.data;
};

export const deleteUser = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/user/${id}`);
    return response.data;
};
