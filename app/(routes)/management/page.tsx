import React from "react";
import ManagementSidebar from "./components/ManagementSidebar/ManagementSidebar";
import RoomTypeTable from "@/components/RoomTypeTable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function page() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <ManagementSidebar />
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full">
        <RoomTypeTable />
      </div>
    </div>
  );
}
