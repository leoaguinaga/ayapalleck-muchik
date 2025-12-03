import api from '../../api';
import { RoomActivity, CreateRoomActivityInput, UserActivity, CreateUserActivityInput } from './activities.types';

// ============ ROOM ACTIVITIES ============

export const createRoomActivity = async (data: CreateRoomActivityInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/room-activity', data);
    return response.data;
};

export const getRoomActivities = async (): Promise<RoomActivity[]> => {
    const response = await api.get('/room-activity');
    return response.data;
};

export const getRoomActivityById = async (id: string): Promise<RoomActivity> => {
    const response = await api.get(`/room-activity/${id}`);
    return response.data;
};

export const getRoomActivitiesByRoomId = async (roomId: string): Promise<RoomActivity[]> => {
    const response = await api.get(`/room-activity/room/${roomId}`);
    return response.data;
};

export const getRoomActivitiesByUserId = async (userId: string): Promise<RoomActivity[]> => {
    const response = await api.get(`/room-activity/user/${userId}`);
    return response.data;
};

export const deleteRoomActivity = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/room-activity/${id}`);
    return response.data;
};

// ============ USER ACTIVITIES ============

export const createUserActivity = async (data: CreateUserActivityInput): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/user-activity', data);
    return response.data;
};

export const getUserActivities = async (): Promise<UserActivity[]> => {
    const response = await api.get('/user-activity');
    return response.data;
};

export const getUserActivityById = async (id: string): Promise<UserActivity> => {
    const response = await api.get(`/user-activity/${id}`);
    return response.data;
};

export const getUserActivitiesByUserId = async (userId: string): Promise<UserActivity[]> => {
    const response = await api.get(`/user-activity/user/${userId}`);
    return response.data;
};

export const getUserActivitiesByAction = async (action: string): Promise<UserActivity[]> => {
    const response = await api.get(`/user-activity/action/${action}`);
    return response.data;
};

export const deleteUserActivity = async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/user-activity/${id}`);
    return response.data;
};
