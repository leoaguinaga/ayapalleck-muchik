import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StatesTooltip from "../StatesTooltip/StatesTooltip";

interface BookingNavbarProps {
  weekOffset: number;
  onPrevWeek: () => void;
  onNextWeek: () => void;
}

export default function BookingNavbar({ weekOffset, onPrevWeek, onNextWeek }: BookingNavbarProps) {
  return (
    <div className="flex flex-col relative xs:flex-row gap-2 justify-between w-full xs:items-center p-4 rounded-xl bg-white">
      <div className="p-0.75 rounded-lg items-center flex gap-1 bg-gray-200/80 w-fit text-sm font-medium">
        <Link
          href="/bookings"
          className="px-2 py-1 bg-white rounded-md shadow-sm"
        >
          General
        </Link>
        <Link href="/bookings/history" className="px-2 py-1 rounded-md">
          Historial
        </Link>
      </div>
      <div className="hidden xs:block border-l h-7.5 mx-1 place-self-center"></div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={onPrevWeek}
            // disabled={weekOffset === 0}
          >
            Anterior
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onNextWeek}
          >
            Siguiente
          </Button>
        </div>
      </div>
      <StatesTooltip />
    </div>
  );
}
