import React from "react";
import {
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import CreateCustomerButton from "../CreateCustomerButton";

interface CustomerNavbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function CustomerNavbar({ searchQuery, onSearchChange }: CustomerNavbarProps) {
  return (
    <div className="flex flex-col relative xs:flex-row gap-2 justify-between w-full xs:items-center p-4 rounded-xl bg-white">
      <div className="relative flex flex-col w-full place-content-end gap-1">
        {/* <p className="text-xs font-medium text-muted-foreground">Búsqueda</p> */}
        <Input
          placeholder="Buscar por nombre o correo del cliente..."
          className="rounded-lg pl-7.5 bg-white text-sm"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute bottom-2.25 left-2 size-4.5 text-muted-foreground" />
      </div>
      <div className="relative flex flex-col gap-1 place-content-end">
        {/* <p className="text-xs font-medium text-muted-foreground">Registra</p> */}
        <CreateCustomerButton />
      </div>
    </div>
  );
}
