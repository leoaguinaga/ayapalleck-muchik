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
        `text-gray-700 dark:text-gray-300 hover:bg-black/55 hover:text-white dark:hover:text-black dark:hover:bg-white/80 flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors duration-400 text-sm font-medium`,
        activePath && "bg-black/90 text-white hover:bg-black/80 dark:bg-white/90 dark:text-black dark:hover:bg-white/80"
      )}
    >
      <Icon className="size-5" strokeWidth={1.5} />
      <p>{label}</p>
    </Link>
  );
}
