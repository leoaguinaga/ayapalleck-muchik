"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelLeftOpen } from "lucide-react";
import { ToggleTheme } from "@/components/ToggleTheme";
import { Breadcrumb } from "../Breadcrum";
import UserButton from "../UserButton";
import Sidebar from "../Sidebar";
import NavbarContent from "../NavbarContent/NavbarContent";
import SearchInput from "../SearchInput/SearchInput";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="w-full bg-white rounded-xl p-1.5 flex flex-row justify-between items-center z-10 h-13.5">
      <div className="flex flex-row items-center gap-2 text-lg font-semibold pl-1">
        {isMounted ? (
          <Sheet>
            <SheetTrigger>
              <PanelLeftOpen className="size-9 rounded-full bg-gray-100 lg:hidden p-2 overflow-visible" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-60 p-0 m-0"
              showCloseButton={false}
            >
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <NavbarContent />
            </SheetContent>
          </Sheet>
        ) : (
          <PanelLeftOpen className="size-9 rounded-full bg-gray-100 lg:hidden p-2" />
        )}
        <Breadcrumb />
      </div>
      <div className="flex flex-row gap-11 md:gap-2 lg:gap-0 items-center">
        <SearchInput />
        <UserButton />
      </div>
    </nav>
  );
}
