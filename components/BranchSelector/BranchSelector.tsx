"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React, { useEffect, useState } from "react";
import { branches } from "../BranchItem/BranchItem.data";
import BranchItem from "../BranchItem/BranchItem";
import BranchButton from "../BranchButton/BranchButton";

export default function BranchSelector() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-row">
        <div className="w-full opacity-50">
          <BranchButton
            isOpen={false}
            name=""
            address="loading..."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger className="w-full">
          <BranchButton
            isOpen={isOpen}
            name="Balta"
            address="Av. José Balta 291"
          />
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="start"
          className="w-56 p-1 text-sm flex flex-col gap-1"
        >
          {branches.map((branch) => (
            <BranchItem
              key={branch.name}
              name={branch.name}
              address={branch.address}
            />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
