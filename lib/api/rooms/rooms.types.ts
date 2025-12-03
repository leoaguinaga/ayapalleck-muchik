import { RoomType } from '../room-types/room-types.types';
import { RoomStatus } from '../types';

export type { RoomStatus };

export interface Room {
    id: string;
    roomNumber: string;
    roomTypeId: string;
    status: RoomStatus;
    available: boolean;
    roomType?: RoomType;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateRoomInput {
    roomNumber: string;
    roomTypeId: string;
    status?: RoomStatus;
}

export interface UpdateRoomInput {
    roomNumber?: string;
    roomTypeId?: string;
    status?: RoomStatus;
    available?: boolean;
}
