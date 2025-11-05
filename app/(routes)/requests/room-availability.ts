import { Room } from './room-types';

// Importar datos de habitaciones (temporal - esto debería venir de una API)
export const rooms: Room[] = [
  { roomNumber: "101", roomType: "Individual", status: "available", price: 100.00, isClean: true },
  { roomNumber: "102", roomType: "Doble", status: "occupied", price: 150.00, isClean: false },
  { roomNumber: "103", roomType: "Suite", status: "available", price: 200.00, isClean: true },
  { roomNumber: "104", roomType: "Individual", status: "maintenance", price: 90.00, isClean: false },
  { roomNumber: "105", roomType: "Doble", status: "available", price: 140.00, isClean: true },
  { roomNumber: "106", roomType: "Suite", status: "occupied", price: 210.00, isClean: false },
  { roomNumber: "107", roomType: "Individual", status: "available", price: 105.00, isClean: true },
  { roomNumber: "108", roomType: "Doble", status: "available", price: 155.00, isClean: true },
  { roomNumber: "109", roomType: "Suite", status: "maintenance", price: 220.00, isClean: false },
  { roomNumber: "110", roomType: "Individual", status: "occupied", price: 95.00, isClean: false },
  { roomNumber: "111", roomType: "Doble", status: "available", price: 145.00, isClean: true },
  { roomNumber: "112", roomType: "Suite", status: "available", price: 205.00, isClean: true },
  { roomNumber: "113", roomType: "Individual", status: "maintenance", price: 100.00, isClean: false },
  { roomNumber: "114", roomType: "Doble", status: "occupied", price: 150.00, isClean: false },
  { roomNumber: "115", roomType: "Suite", status: "available", price: 215.00, isClean: true },
  { roomNumber: "116", roomType: "Individual", status: "available", price: 110.00, isClean: true },
  { roomNumber: "117", roomType: "Doble", status: "maintenance", price: 160.00, isClean: false },
  { roomNumber: "118", roomType: "Suite", status: "occupied", price: 225.00, isClean: false },
  { roomNumber: "119", roomType: "Individual", status: "available", price: 120.00, isClean: true },
  { roomNumber: "120", roomType: "Doble", status: "available", price: 170.00, isClean: true },
  { roomNumber: "201", roomType: "Individual", status: "available", price: 110.00, isClean: true },
  { roomNumber: "202", roomType: "Doble", status: "available", price: 160.00, isClean: true },
  { roomNumber: "203", roomType: "Suite", status: "available", price: 230.00, isClean: true },
  { roomNumber: "204", roomType: "Individual", status: "available", price: 105.00, isClean: true },
  { roomNumber: "205", roomType: "Doble", status: "available", price: 165.00, isClean: true },
];

export function checkRoomAvailability(
  roomType: string,
  checkIn: Date,
  checkOut: Date
): { available: Room[]; total: number } {
  const availableRooms = rooms.filter(
    (room) => room.roomType === roomType && room.status === 'available' && room.isClean
  );

  return {
    available: availableRooms,
    total: rooms.filter((room) => room.roomType === roomType).length,
  };
}
