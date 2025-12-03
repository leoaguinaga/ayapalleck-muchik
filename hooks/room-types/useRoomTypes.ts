'use client'

import { useQuery } from "@tanstack/react-query";
import { getRoomTypes } from "@/lib/api/room-types/room-types";

export function useRoomTypes() {
    return useQuery({
        queryKey: ['room-type'],
        queryFn: getRoomTypes,
        staleTime: 5 * 60 * 1000,
    });
}