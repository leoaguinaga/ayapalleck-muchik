import React from "react";
import { ChevronDown, Filter, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type BookingHistoryNavbarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  roomTypeFilter: string;
  onRoomTypeChange: (value: string) => void;
};

const statusLabels: Record<string, string> = {
  all: "Todos",
  pending: "Pendientes",
  canceled: "Canceladas",
  complete: "Completadas",
  rejected: "Rechazadas",
  expired: "Expiradas",
};

const roomTypeLabels: Record<string, string> = {
  all: "Todos",
  double: "Doble",
  suite: "Suite",
  individual: "Individual",
  matrimonial: "Matrimonial",
};

export default function BookingHistoryNavbar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  roomTypeFilter,
  onRoomTypeChange,
}: BookingHistoryNavbarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between w-full p-4 rounded-xl bg-white">
      <div className="p-0.75 rounded-lg items-center flex gap-1 bg-gray-200/80 w-fit text-sm font-medium">
        <Link href="/bookings" className="px-2 py-1 rounded-md">
          General
        </Link>
        <Link
          href="/bookings/history"
          className="px-2 py-1 bg-white rounded-md shadow-sm"
        >
          Historial
        </Link>
      </div>
      <div className="relative flex flex-col w-full place-content-end">
        <Input
          placeholder="Buscar por nombre o correo del cliente..."
          className="rounded-lg pl-7.5 bg-white text-sm"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute top-2.25 left-2 size-4.5 text-muted-foreground" />
      </div>
      <div className="flex w-full flex-col gap-1 sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-35 justify-between">
              {statusLabels[statusFilter]}
              <Filter className="size-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-45">
            <DropdownMenuLabel>Estado</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={statusFilter}
              onValueChange={onStatusChange}
            >
              <DropdownMenuRadioItem value="all">Todos</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="pending">Pendientes</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="canceled">Canceladas</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="complete">Completadas</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="rejected">Rechazadas</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="expired">Expiradas</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex w-full flex-col gap-1 sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-45 justify-between">
              {roomTypeLabels[roomTypeFilter]}
              <Filter className="size-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-45">
            <DropdownMenuLabel>Tipo de habitación</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={roomTypeFilter}
              onValueChange={onRoomTypeChange}
            >
              <DropdownMenuRadioItem value="all">Todos</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="double">Doble</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="suite">Suite</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="individual">Individual</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="matrimonial">Matrimonial</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
