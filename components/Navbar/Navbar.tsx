import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { PanelLeftOpen, Search } from "lucide-react"
import SidebarRoutes from "../SidebarRoutes"
import { ToggleTheme } from "@/components/ToggleTheme"
import { Breadcrumb } from "../Breadcrum"

export default function Navbar() {
  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-4 justify-between w-full bg-background py-4 border-b">
      <div className="flex gap-x-4 items-center">
        <div className="block xl:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <PanelLeftOpen />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <SidebarRoutes />
            </SheetContent>
          </Sheet>
        </div>
        <Breadcrumb />
      </div>
      <div className="flex gap-x-2 items-center flex-row">
        {/* <div className="relative w-[300px] hidden md:block">
          <Input placeholder="Search..." className="rounded-lg pr-10" />
          <Search className="absolute top-2 right-2 size-5 text-gray-600" />
        </div> */}
        <ToggleTheme />
      </div>
    </nav>
  )
}