"use client";

import { ChevronsUpDown, Siren, UserCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "../ui/separator";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import ConfigurationDialog, { ConfigTab } from "../ConfigurationDialog";

export default function UserButton() {
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ConfigTab>("profile");
  useEffect(() => setIsMounted(true), []);

  const handleLogout = async () => {
    await authClient.signOut();
    redirect("/");
  };

  const openConfig = (tab: ConfigTab) => {
    setActiveTab(tab);
    setDialogOpen(true);
    setIsOpen(false);
  };

  if (!isMounted) {
    return (
      <article className="flex flex-row items-center cursor-pointer hover:bg-gray-100 p-1.5 rounded-lg gap-1 sm:gap-2">
        <img src="/favicon.webp" alt="" className="size-9 dark:invert" />
        <div className="flex flex-col leading-tight text-sm max-sm:hidden">
          <p className="font-semibold">Loading...</p>
          <p className="text-xs text-gray-500 font-medium">loading...</p>
        </div>
        <ChevronsUpDown className="size-4" strokeWidth={2} />
      </article>
    );
  }

  return (
    <>
      <ConfigurationDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        tab={activeTab}
      />
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger
          className={`flex flex-row items-center cursor-pointer hover:bg-gray-300/20 p-1.5 rounded-lg gap-1 sm:gap-2 text-left ${
            isOpen ? "bg-gray-300/20" : ""
          }`}
        >
          <div className="flex flex-row gap-2 items-center">
            <img src="/favicon.webp" alt="" className="size-7.5 dark:invert" />
            <div className="flex flex-col leading-tight text-sm max-sm:hidden">
              <div className="font-semibold">
                {session?.user.name ? session.user.name : "Cargando nombre..."}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-300 font-medium">
                Administrador
              </div>
            </div>
          </div>
          <ChevronsUpDown className="size-4" strokeWidth={2} />
        </PopoverTrigger>

        <PopoverContent
          side="bottom"
          align="end"
          className="max-w-50 p-0 text-sm flex flex-col gap-1"
        >
          <div
            className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 p-2 rounded-md mx-1 mt-1"
            onClick={() => openConfig("profile")}
          >
            <UserCircle className="size-5" />
            <p>Mi perfil</p>
          </div>
          <Separator className="w-full" />
          <div
            className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-300/20 p-2 rounded-md mx-1"
            onClick={() => openConfig("help")}
          >
            <Siren className="size-5" />
            <p>Obtener ayuda</p>
          </div>
          <Separator className="w-full" />
        </PopoverContent>
      </Popover>
    </>
  );
}
