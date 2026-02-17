import { ChartNetwork, SlidersHorizontal } from "lucide-react";
import BranchSelector from "../BranchSelector";
import SidebarItem from "../SidebarItem";
import SidebarRoutes from "../SidebarRoutes";

export default function NavbarContent() {
  return (
    <div className="bg-white w-full h-full p-2 flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <BranchSelector />
        <SidebarRoutes />
      </div>
      <div className="flex flex-col gap-1">
        <SidebarItem
          item={{
            label: "Estadísticas",
            icon: ChartNetwork,
            href: "/statistics",
          }}
          key="statistics"
        />
        <SidebarItem
          item={{
            label: "Gestión",
            icon: SlidersHorizontal,
            href: "/management",
          }}
          key="management"
        />
      </div>
    </div>
  );
}
