import React from "react";
import { RoomCardProps } from "./RoomCard.types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  Bed,
  BookMarked,
  BrushCleaning,
  EllipsisVertical,
  ShowerHead,
  Stars,
  Tv2,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateBookingButton from "../CreateBookingButton";
import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function RoomCard(props: RoomCardProps) {
  const { room_type, number, available, status } = props;

  const getAvailability = () => {
    if (available) {
      return (
        <div className="flex flex-row gap-1 items-center text-green-500 text-sm font-medium">
          <BadgeCheck className="size-3.5" />
          Disponible
        </div>
      );
    } else {
      return (
        <div className="flex flex-row gap-1 items-center text-orange-500 text-sm font-medium">
          <Bed className="size-3.5" />
          Ocupado
        </div>
      );
    }
  };

  const getStatus = () => {
    if (status === "DIRTY") {
      return (
        <p className="absolute bottom-2 left-2 text-xs font-medium bg-red-100 text-red-600 rounded-md px-2 py-1">
          Sucio
        </p>
      );
    } else {
      return (
        <p className="absolute bottom-2 left-2 text-xs font-medium text-muted-foreground bg-gray-100 rounded-md px-2 py-1">
          Ult. limpieza 20:30
        </p>
      );
    }
  };

  const getActionButton = () => {
    if (available) {
      return (
        <Link href={`/check-in/${number}`}>
          <Button className="w-full flex flex-row gap-2 cursor-pointer">
            Registrar
          </Button>
        </Link>
      );
    } else {
      return (
        <Link href={`/check-out/${number}`}>
          <Button className="w-full flex flex-row gap-2 bg-orange-500 hover:bg-orange-600 cursor-pointer">
            Administrar
          </Button>
        </Link>
      );
    }
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md">
      <div className="relative h-38 w-full overflow-hidden">
        <img
          src="/room-simple.webp"
          className="object-cover scale-110"
          alt=""
        />
        {/* <EllipsisVertical className="absolute top-2 right-2 size-5.5 p-1 bg-white rounded-full text-muted-foreground cursor-pointer hover:shadow-md transition-shadow" /> */}
        <p className="absolute top-2 left-2 text-sm px-2 py-0.5 bg-black text-white rounded-md font-semibold">
          {number}
        </p>
        {getStatus()}
      </div>
      <div className="flex flex-col gap-1 p-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold">{room_type}</p>
          {getAvailability()}
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Tooltip>
            <TooltipTrigger>
              <Tv2 className="size-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Televisor</p>
            </TooltipContent>
          </Tooltip>
          <ShowerHead className="size-4 text-muted-foreground" />
          <Wifi className="size-4 text-muted-foreground" />
        </div>
        <div className="mt-2">{getActionButton()}</div>
      </div>
    </div>
  );
}
