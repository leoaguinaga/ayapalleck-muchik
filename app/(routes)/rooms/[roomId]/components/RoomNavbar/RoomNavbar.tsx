import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ButtonCreateRoom from "../../../components/ButtonCreateRoom";
import { Button } from "@/components/ui/button";

type RoomNavbarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  roomTypeFilter: string;
  onRoomTypeFilterChange: (value: string) => void;
  roomTypeOptions: string[];
};

export default function RoomNavbar({
  searchQuery,
  onSearchChange,
  roomTypeFilter,
  onRoomTypeFilterChange,
  roomTypeOptions,
}: RoomNavbarProps) {
  return (
    <div className="flex flex-col relative xs:flex-row gap-2 justify-between w-full xs:items-center p-4 rounded-xl bg-white">
      <div className="relative flex flex-col w-full place-content-end gap-1">
        <Input
          placeholder="Buscar por número de habitación..."
          className="rounded-lg pl-7.5 bg-white text-sm"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute bottom-2.25 left-2 size-4.5 text-muted-foreground" />
      </div>
      <div className="flex w-full flex-col gap-1 sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-45 justify-between bg-white">
              Tipo de habitación
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[180px]" align="start">
            <DropdownMenuItem onClick={() => onRoomTypeFilterChange("all")}>
              Todos
            </DropdownMenuItem>
            {roomTypeOptions.map((type) => (
              <DropdownMenuItem key={type} onClick={() => onRoomTypeFilterChange(type)}>
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative flex flex-col gap-1 place-content-end">
        <ButtonCreateRoom />
      </div>
    </div>
  );
}
