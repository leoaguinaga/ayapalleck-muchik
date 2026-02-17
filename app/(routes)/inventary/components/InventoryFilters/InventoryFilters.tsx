import React from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { InventoryFiltersProps } from "./InventoryFilters.types";

export default function InventoryFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: InventoryFiltersProps) {
  const getCategoryLabel = () => {
    switch (category) {
      case "all":
        return "Todas las categorías";
      case "Venta":
        return "Venta";
      case "Almacén":
        return "Almacén";
      default:
        return "Categoría";
    }
  };

  return (
    <>
      <div className="relative flex flex-col w-full place-content-end">
        <Input
          placeholder="Buscar por nombre del producto..."
          className="rounded-lg pl-7.5 bg-white text-sm"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute top-2.25 left-2 size-4.5 text-muted-foreground" />
      </div>

      <div className="flex w-full flex-col gap-1 sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full sm:w-49 bg-white justify-between"
            >
            Categoría del producto
              <Filter className="size-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-49">
            <DropdownMenuRadioGroup
              value={category}
              onValueChange={onCategoryChange}
            >
              <DropdownMenuRadioItem value="all">
                <span className="flex-1">Todas</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Venta">
                <span className="flex-1">Venta</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Almacén">
                <span className="flex-1">Almacén</span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
