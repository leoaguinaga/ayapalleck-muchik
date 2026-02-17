import React from "react";
import Link from "next/link";
import InventoryHistoryFilters from "../InventoryHistoryFilters";

interface InventaryHistoryNavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  movementType: string;
  onMovementTypeChange: (value: string) => void;
}

export default function InventaryHistoryNavbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  movementType,
  onMovementTypeChange,
}: InventaryHistoryNavbarProps) {
  return (
    <div className="flex flex-col relative xs:flex-row gap-2 justify-between w-full xs:items-center p-4 rounded-xl bg-white">
      <div className="p-0.75 rounded-lg items-center flex gap-1 bg-gray-200/80 w-fit text-sm font-medium">
        <Link
          href="/inventary"
          className="px-2 py-1 rounded-md"
        >
          General
        </Link>
        <Link href="/inventary/history" className="px-2 py-1 rounded-md bg-white shadow-sm">
          Historial
        </Link>
      </div>
      <InventoryHistoryFilters
        search={search}
        onSearchChange={onSearchChange}
        category={category}
        onCategoryChange={onCategoryChange}
        movementType={movementType}
        onMovementTypeChange={onMovementTypeChange}
      />
    </div>
  );
}
