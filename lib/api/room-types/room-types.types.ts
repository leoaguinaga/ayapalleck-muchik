
export interface RoomType {
    id: string;
    name: string;
    description?: string | null;
    price: number;
    available: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateRoomTypeInput {
    name: string;
    price: number;
    description?: string;
}

export interface UpdateRoomTypeInput {
    name?: string;
    price?: number;
    description?: string;
    available?: boolean;
}
