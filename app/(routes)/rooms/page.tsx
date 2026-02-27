"use client";

import React from "react";
import RoomsTable from "./components/RoomsTable/RoomsTable";
import RoomsInfo from "./components/RoomsInfo";
import UpcomingBookingsTable from "./components/UpcomingBookingsTable";
import RoomNavbar from "./[roomId]/components/RoomNavbar/RoomNavbar";
import { useRooms } from "@/hooks/rooms/useRooms";
import { Room } from "@/lib/api/rooms";

export default function page() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [roomTypeFilter, setRoomTypeFilter] = React.useState("all");
  const { data: roomsResponse, isLoading, isError } = useRooms();

  const rooms = React.useMemo<Room[]>(() => {
    if (!roomsResponse) return [];
    if (typeof roomsResponse === "object" && "value" in roomsResponse) {
      return Array.isArray((roomsResponse as { value: unknown[] }).value)
        ? ((roomsResponse as { value: Room[] }).value ?? [])
        : [];
    }
    return Array.isArray(roomsResponse) ? (roomsResponse as Room[]) : [];
  }, [roomsResponse]);

  const roomTypeOptions = React.useMemo(() => {
    const options = new Set<string>();
    rooms.forEach((room) => {
      const roomTypeName =
        typeof room.roomType?.name === "object" && room.roomType?.name && "value" in room.roomType.name
          ? String((room.roomType.name as { value: string }).value)
          : String(room.roomType?.name ?? "");
      if (roomTypeName.trim()) options.add(roomTypeName.trim());
    });
    return Array.from(options).sort((a, b) => a.localeCompare(b));
  }, [rooms]);

  const filteredRooms = React.useMemo(() => {
    return rooms.filter((room) => {
      const roomNumber = String(room.roomNumber ?? "").toLowerCase();
      const roomTypeName =
        typeof room.roomType?.name === "object" && room.roomType?.name && "value" in room.roomType.name
          ? String((room.roomType.name as { value: string }).value)
          : String(room.roomType?.name ?? "");

      const matchesSearch = roomNumber.includes(searchQuery.toLowerCase());
      const matchesType = roomTypeFilter === "all" || roomTypeName === roomTypeFilter;
      return matchesSearch && matchesType;
    });
  }, [rooms, searchQuery, roomTypeFilter]);

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <RoomNavbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        roomTypeFilter={roomTypeFilter}
        onRoomTypeFilterChange={setRoomTypeFilter}
        roomTypeOptions={roomTypeOptions}
      />
      <RoomsInfo />
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full">
        <RoomsTable rooms={filteredRooms} isLoading={isLoading} isError={isError} />
        {/* <UpcomingBookingsTable /> */}
      </div>
    </div>
  );
}
