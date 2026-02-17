"use client";

import React, { useState, useMemo } from "react";
import RoomCard from "./components/RoomCard/RoomCard";
import { rooms } from "./components/RoomCard/RoomCard.data";
import CheckInFilters from "./components/CheckInFilters";

export default function CheckInPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roomTypeFilter, setRoomTypeFilter] = useState("all");
  const [occupancyFilter, setOccupancyFilter] = useState("all");
  const [cleanlinessFilter, setCleanlinessFilter] = useState("all");

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesSearch = room.number
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesType =
        roomTypeFilter === "all" || room.room_types === roomTypeFilter;
      const isOccupied = room.status === "OCCUPIED";
      const matchesOccupancy =
        occupancyFilter === "all" ||
        (occupancyFilter === "occupied" && isOccupied) ||
        (occupancyFilter === "not_occupied" && !isOccupied);

      const isDirty = room.status === "DIRTY";
      const matchesCleanliness =
        cleanlinessFilter === "all" ||
        (cleanlinessFilter === "dirty" && isDirty) ||
        (cleanlinessFilter === "clean" && !isDirty);

      return (
        matchesSearch && matchesType && matchesOccupancy && matchesCleanliness
      );
    });
  }, [searchQuery, roomTypeFilter, occupancyFilter, cleanlinessFilter]);

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <CheckInFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        roomTypeFilter={roomTypeFilter}
        onRoomTypeChange={setRoomTypeFilter}
        occupancyFilter={occupancyFilter}
        onOccupancyChange={setOccupancyFilter}
        cleanlinessFilter={cleanlinessFilter}
        onCleanlinessChange={setCleanlinessFilter}
      />
      <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-4 rounded-xl bg-white">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <RoomCard
              key={index}
              number={room.number}
              room_type={room.room_types}
              status={room.status}
              available={room.available}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No se encontraron habitaciones en la búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}
