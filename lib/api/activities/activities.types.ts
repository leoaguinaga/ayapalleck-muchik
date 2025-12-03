import { UserAction } from '../types';
import { Room } from '../rooms/rooms.types';
import { User } from '../users/users.types';

// Room Activity
export interface RoomActivity {
    id: string;
    roomId: string;
    userId: string;
    action: string;
    createdAt: string;
    // Relaciones opcionales
    room?: Room;
    user?: User;
}

export interface CreateRoomActivityInput {
    roomId: string;
    userId: string;
    action: string;
    createdAt?: string;
}

// User Activity
export interface UserActivity {
    id: string;
    userId: string;
    action: UserAction;
    title?: string | null;
    description?: string | null;
    createdAt: string;
    // Relaciones opcionales
    user?: User;
}

export interface CreateUserActivityInput {
    userId: string;
    action: UserAction;
    title?: string;
    description?: string;
    createdAt?: string;
}
