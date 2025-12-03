import api from '../../api';
import { RoomType, CreateRoomTypeInput, UpdateRoomTypeInput } from './room-types.types';

export const createRoomType = async (data: CreateRoomTypeInput): Promise<RoomType> => {
    const response = await api.post('/room-type', data);
    return response.data;
}

export const getRoomTypes = async (): Promise<RoomType[]> => {
    const response = await api.get('/room-type');
    return response.data;
}

export const getRoomTypeById = async (id: string): Promise<RoomType> => {
    const response = await api.get(`/room-type/${id}`);
    return response.data;
}

export const updateRoomType = async (id: string, data: UpdateRoomTypeInput): Promise<RoomType> => {
    const response = await api.put(`/room-type/${id}`, data);
    return response.data;
}

export const deleteRoomType = async (id: string): Promise<void> => {
    const response = await api.delete(`/room-type/${id}`);
    return response.data;
}