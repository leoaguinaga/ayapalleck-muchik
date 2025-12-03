import api from '../../api';
import { User } from '../users/users.types';

interface SignUpInput {
    name: string;
    email: string;
    password: string;
}

interface SignInInput {
    email: string;
    password: string;
}

interface AuthResponse {
    success: boolean;
    message: string;
    token: string;
    user: User;
}

export const signUp = async (data: SignUpInput): Promise<AuthResponse> => {
    const response = await api.post('/user/sign-up', data);
    return response.data;
};

export const signIn = async (data: SignInInput): Promise<AuthResponse> => {
    const response = await api.post('/user/sign-in', data);
    return response.data;
};

export const getSession = async (): Promise<User> => {
    const response = await api.get('/user/me');
    return response.data;
};
