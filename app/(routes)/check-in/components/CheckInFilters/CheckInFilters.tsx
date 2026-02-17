import React from "react";
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
import { ChevronDown, Filter, LayoutGrid, Search, Table } from "lucide-react";
import { CheckInFiltersProps } from "./CheckInFilters.types";

const roomTypeLabels: Record<string, string> = {
  all: "Todas",
  simple: "Simple",
  doble: "Doble",
  matrimonial: "Matrimonial",
  suite: "Suite",
};

const occupancyLabels: Record<string, string> = {
  all: "Todas",
  not_occupied: "Disponible",
  occupied: "Ocupada",
};

const cleanlinessLabels: Record<string, string> = {
  all: "Todas",
  clean: "Limpia",
  dirty: "Sucia",
};

export default function CheckInFilters({
  searchQuery,
  onSearchChange,
  roomTypeFilter,
  onRoomTypeChange,
  occupancyFilter,
  onOccupancyChange,
  cleanlinessFilter,
  onCleanlinessChange,
}: CheckInFiltersProps) {
  return (
    <div className="flex flex-col xl:flex-row gap-2.5 justify-between w-full p-4 rounded-xl bg-white">
      <div className="relative flex flex-col gap-1 w-full place-content-end">
        <Input
          placeholder="Buscar por número de habitación..."
          className="rounded-lg pl-7.5 bg-white text-sm"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute top-2.5 left-2 size-4.5 text-muted-foreground" />
      </div>

      <div className="flex w-full flex-col gap-2.5 sm:flex-row lg:w-auto">
        {/* Tipo de habitación */}
        <div className="flex w-full flex-col gap-1 sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-42 justify-between relative"
              >
                <p>Tipo de habitación</p>
                <Filter className="size-3.5 absolute top-2.5 right-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-42">
              <DropdownMenuRadioGroup
                value={roomTypeFilter}
                onValueChange={onRoomTypeChange}
              >
                <DropdownMenuRadioItem value="all">Todas</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="simple">
                  Simple
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="doble">
                  Doble
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="matrimonial">
                  Matrimonial
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="suite">
                  Suite
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Ocupación */}
        <div className="flex w-full flex-col gap-1 sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-45 justify-between relative"
              >
                <p>Estado de ocupación</p>
                <Filter className="size-3.5 absolute top-2.5 right-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-45">
              <DropdownMenuRadioGroup
                value={occupancyFilter}
                onValueChange={onOccupancyChange}
              >
                <DropdownMenuRadioItem value="all">Todas</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="not_occupied">
                  Disponible
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="occupied">
                  Ocupada
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Limpieza */}
        <div className="flex w-full flex-col gap-1 sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-42 relative justify-between"
              >
                <p>Estado de limpieza</p>
                <Filter className="size-3.5 absolute top-2.5 right-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-42">
              <DropdownMenuRadioGroup
                value={cleanlinessFilter}
                onValueChange={onCleanlinessChange}
              >
                <DropdownMenuRadioItem value="all">Todas</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="clean">
                  Limpia
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dirty">
                  Sucia
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Botones de vista */}
        <div className="flex gap-1.5 items-end">
          <LayoutGrid className="size-9 p-2 text-white bg-black border rounded-lg" />
          <Table className="size-9 p-2 text-muted-foreground border rounded-lg" />
        </div>
      </div>
    </div>
  );
}
