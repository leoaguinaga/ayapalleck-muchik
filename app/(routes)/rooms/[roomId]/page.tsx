'use client'

import { use } from "react";
import DangerZone from "./components/DangerZone";
import RecentActivity from "./components/RecentActivity";
import RoomBookings from "./components/RoomBookings/RoomBookings";
import RoomDetails from "./components/RoomDetails";
import RoomInfo from "./components/RoomInfo/RoomInfo";
import { useRoom } from "@/hooks/rooms";
import { Skeleton } from "@/components/ui/skeleton";

export default function RoomNumberPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = use(params);
  const { data: room, isLoading, isError } = useRoom(roomId);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5">
        <Skeleton className="h-32 w-full" />
        <div className="w-full flex flex-col 2xl:flex-row gap-5">
          <div className="flex flex-col md:flex-row w-full gap-5">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (isError || !room) {
    return (
      <div className="flex flex-col gap-5">
        <div className="text-center py-8 text-destructive">
          Error al cargar la habitación
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <RoomInfo room={room} />
      <div className="w-full flex flex-col 2xl:flex-row gap-5">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <RoomDetails room={room} />
          <RoomBookings />

          {/* <RecentActivity /> */}
        </div>
      </div>
      <DangerZone roomNumber={roomId} />
    </div>
  );
}
