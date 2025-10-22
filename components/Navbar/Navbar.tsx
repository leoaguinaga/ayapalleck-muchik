"use client"

import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { PanelLeftOpen } from "lucide-react"
import SidebarRoutes from "../SidebarRoutes"
import { ToggleTheme } from "@/components/ToggleTheme"
import { Breadcrumb } from "../Breadcrum"

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-4 justify-between w-full bg-background py-4 border-b">
      <div className="flex gap-x-4 items-center">
        <div className="block xl:hidden">
          {isMounted ? (
            <Sheet>
              <SheetTrigger className="flex items-center" >
                <PanelLeftOpen />
              </SheetTrigger>
              <SheetContent side="left" className="w-70 p-0 m-0" showCloseButton={false}>
                <SheetHeader >
                  <SheetTitle></SheetTitle>
                </SheetHeader>
                <SidebarRoutes />
              </SheetContent>
            </Sheet>
          ) : (
            <button className="flex items-center">
              <PanelLeftOpen />
            </button>
          )}
        </div>
        <Breadcrumb />
      </div>
      <div className="flex gap-x-2 items-center flex-row">
        <ToggleTheme />
      </div>
    </nav>
  )
}