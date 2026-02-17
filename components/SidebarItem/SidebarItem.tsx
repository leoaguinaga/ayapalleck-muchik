"use client";

import React from "react";
import { SidebarItemProps } from "./SidebarItem.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { label, icon: Icon, href } = item;

  const pathname = usePathname();
  const activePath = pathname.includes( href);

  return (
    <Link
      href={href}
      className={cn(
        `text-gray-700 hover:bg-black/55 hover:text-white flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors duration-400 text-sm font-medium`,
        activePath && "bg-black/90 text-white hover:bg-black/80"
      )}
    >
      <Icon className="size-5" strokeWidth={1.5} />
      <p>{label}</p>
    </Link>
  );
}
