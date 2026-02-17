import React from "react";
import Link from "next/link";
import CreateProductButton from "../CreateProductButton";
import InventoryFilters from "../InventoryFilters";

interface InventaryNavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
}

export default function InventaryNavbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: InventaryNavbarProps) {
  return (
    <div className="flex flex-col relative xs:flex-row gap-2 justify-between w-full xs:items-center p-4 rounded-xl bg-white">
      <div className="p-0.75 rounded-lg items-center flex gap-1 bg-gray-200/80 w-fit text-sm font-medium">
        <Link
          href="/inventary"
          className="px-2 py-1 bg-white rounded-md shadow-sm"
        >
          General
        </Link>
        <Link href="/inventary/history" className="px-2 py-1 rounded-md">
          Historial
        </Link>
      </div>
      <InventoryFilters
        search={search}
        onSearchChange={onSearchChange}
        category={category}
        onCategoryChange={onCategoryChange}
      />
      <CreateProductButton />
    </div>
  );
}
