import React from "react";
import { ChevronsLeft, ChevronsRight, Columns3, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RequestNavbarProps } from "./RequestNavbar.types";

export default function RequestNavbar({ onExpandAll, onCollapseAll }: RequestNavbarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between w-full p-4 rounded-xl bg-white">
      <div className="p-0.75 rounded-lg items-center flex gap-1 bg-gray-200/80 w-fit text-sm font-medium">
        <Link
          href="/requests"
          className="px-2 py-1 bg-white rounded-md shadow-sm"
        >
          General
        </Link>
        <Link href="/requests/history" className="px-2 py-1 rounded-md">
          Historial
        </Link>
      </div>
      <div className="border-l h-7.5 mx-1 place-self-center"></div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onExpandAll}>
            Expandir todo
            {/* <ChevronsRight className="size-5" /> */}
          </Button>
          <Button variant="outline" size="sm" onClick={onCollapseAll}>
            Colapsar todo
            {/* <ChevronsLeft className="size-5" /> */}
          </Button>
        </div>
        <div className="flex gap-1.5 items-center">
          <Columns3 className="size-9 p-2 text-white bg-black border rounded-lg" />
          <Table className="size-9 p-2 text-muted-foreground border rounded-lg" />
        </div>
      </div>
    </div>
  );
}
