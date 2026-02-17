"use client";

import React, { useState, useMemo } from 'react'
import MovementHistoryInfo from './components/MovementHistoryInfo'
import MovementHistoryTable from './components/MovementHistoryTable'
import InventaryHistoryNavbar from './components/InventaryHistoryNavbar/InventaryHistoryNavbar'
import { movementHistoryData } from './components/MovementHistoryTable/MovementHistoryTable.data'

export default function InventoryHistoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [movementType, setMovementType] = useState("all");

  const filteredData = useMemo(() => {
    return movementHistoryData.filter((movement) => {
      // Search filter
      const matchesSearch = movement.productName
        .toLowerCase()
        .includes(search.toLowerCase());

      // Category filter
      const matchesCategory =
        category === "all" || movement.category === category;

      // Movement type filter
      const matchesMovementType =
        movementType === "all" || movement.type === movementType;

      return matchesSearch && matchesCategory && matchesMovementType;
    });
  }, [search, category, movementType]);

  return (
    <div className='flex flex-col gap-4 w-full h-full'>
      <InventaryHistoryNavbar 
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        movementType={movementType}
        onMovementTypeChange={setMovementType}
      />
      <MovementHistoryInfo />
      <MovementHistoryTable data={filteredData} />
    </div>
  )
}
