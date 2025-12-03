import api from '../../api';
import { Room, CreateRoomInput, UpdateRoomInput } from './rooms.types';

export const createRoom = async (data: CreateRoomInput): Promise<Room> => {
    const response = await api.post('/room', data);
    return response.data;
};

export const getRooms = async (): Promise<Room[]> => {
    const response = await api.get('/room');
    return response.data;
};

export const getRoomById = async (id: string): Promise<Room> => {
    const response = await api.get(`/room/${id}`);
    return response.data;
};

export const updateRoom = async (id: string, data: UpdateRoomInput): Promise<Room> => {
    const response = await api.put(`/room/${id}`, data);
    return response.data;
};

export const deleteRoom = async (id: string): Promise<void> => {
    await api.delete(`/room/${id}`);
};

export const updateRoomStatus = async (id: string, status: Room['status']): Promise<Room> => {
    const response = await api.patch(`/room/${id}/status`, { status });
    return response.data;
};
