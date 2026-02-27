"use client";

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-background p-4">
      <Sidebar />
      <div className="ml-0 lg:ml-64 flex flex-col gap-4">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
