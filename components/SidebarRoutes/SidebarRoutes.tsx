"use client";

import SidebarItem from "../SidebarItem";
import {
  dataAdminSidebar,
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from "./SidebarRoutes.data";

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col gap-1 mt-2 text-sm font-medium">
      {dataAdminSidebar.map((item) => (
        <SidebarItem key={item.label} item={item} />
      ))}
      {dataGeneralSidebar.map((item) => (
        <SidebarItem key={item.label} item={item} />
      ))}
      {dataToolsSidebar.map((item) => (
        <SidebarItem key={item.label} item={item} />
      ))}
      {dataSupportSidebar.map((item) => (
        <SidebarItem key={item.label} item={item} />
      ))}
    </div>
  );
}
