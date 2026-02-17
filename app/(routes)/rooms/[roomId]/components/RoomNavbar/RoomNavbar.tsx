import React from "react";
import {
  ClipboardPlusIcon,
  Columns3,
  PackagePlus,
  Search,
  Table,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import ButtonCreateRoom from "../../../components/ButtonCreateRoom";

export default function RoomNavbar() {
  return (
    <div className="flex flex-col relative xs:flex-row gap-2 justify-between w-full xs:items-center p-4 rounded-xl bg-white">
      <div className="relative flex flex-col w-full place-content-end gap-1">
        {/* <p className="text-xs font-medium text-muted-foreground">Búsqueda</p> */}
        <Input
          placeholder="Buscar por nombre o correo del cliente..."
          className="rounded-lg pl-7.5 bg-white text-sm"
        />
        <Search className="absolute bottom-2.25 left-2 size-4.5 text-muted-foreground" />
      </div>
      <div className="flex w-full flex-col gap-1 sm:w-auto">
        {/* <p className="text-xs font-medium text-muted-foreground">
          Tipo de habitación
        </p> */}
        <Select>
          <SelectTrigger className="w-full sm:w-45 bg-white">
            <SelectValue placeholder="Tipo de habitación" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="double">Suite</SelectItem>
            <SelectItem value="suite">Simple</SelectItem>
            <SelectItem value="individual">Matrimonial</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative flex flex-col gap-1 place-content-end">
        {/* <p className="text-xs font-medium text-muted-foreground">Registra</p> */}
        <ButtonCreateRoom />
      </div>
    </div>
  );
}
