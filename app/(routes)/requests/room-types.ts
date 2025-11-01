export interface Room {
  roomNumber: string;
  roomType: string;
  status: 'available' | 'occupied' | 'maintenance';
  price: number;
  isClean: boolean;
}

export interface AvailableRoom extends Room {
  isRecommended?: boolean;
}
