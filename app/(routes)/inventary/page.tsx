"use client";

import React, { useState, useMemo } from 'react'
import InventoryInfo from './components/InventoryInfo'
import InventoryTable from './components/InventoryTable'
import LowStockAlert from './components/LowStockAlert'
import InventaryNavbar from './components/InventaryNavbar/InventaryNavbar'
import { inventoryData } from './components/InventoryTable/InventoryTable.data'

export default function InventaryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredData = useMemo(() => {
    return inventoryData.filter((product) => {
      // Search filter
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      // Category filter
      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className='flex flex-col gap-4 w-full h-full'>
      <InventaryNavbar 
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />
      <InventoryInfo />
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-5 w-full h-full'>
        <div className='w-full h-full col-span-3'>
          <InventoryTable data={filteredData} />
        </div>
        <div className='col-span-1 flex flex-col gap-5'>
          <LowStockAlert />
        </div>
      </div>
    </div>
  )
}