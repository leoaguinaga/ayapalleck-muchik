import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

api.interceptors.request.use(
    async (config) => {
        if (typeof window !== 'undefined') {
            const cookies = document.cookie.split('; ');
            const sessionCookie = cookies.find(row => row.startsWith('better-auth.session_token='));

            if (sessionCookie) {
                const token = sessionCookie.split('=')[1];
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (typeof window !== 'undefined') {
                window.location.href = '/';
            }
        }
        return Promise.reject(error);
    }
);

export default api;