"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CustomersTableProps } from "./CustomersTable.types";
import { EllipsisVertical, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Tag from "@/components/Tag/Tag";
import { getInitials } from "@/lib/utils";

export const columns: ColumnDef<CustomersTableProps>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
          {getInitials(row.getValue("name") as string)}
        </div>
        <div className="flex flex-col">
          <span className="font-medium">{row.getValue("name") as string}</span>
          <span className="text-xs text-muted-foreground">
            example@outlook.com
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "document",
    header: "Documento",
    cell: ({ row }) => {
      const { documentType, documentNumber } = row.original;

      return <span>{`${documentType} - ${documentNumber}`}</span>;
    },
  },
  {
    accessorKey: "phone",
    header: "Contacto",
    cell: ({ row }) => {
      const { phone } = row.original;
      return (
        <p>
          {"+51 "}
          <span>{phone?.replace(/(\d{3})(?=\d)/g, "$1 ")}</span>
        </p>
      );
    },
  },
  {
    accessorKey: "state",
    header: "Estado",
    cell: ({ row }) => {
      return <Tag text="Activo" color="green" />;
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const { documentNumber } = row.original;

      return (
        <div className="justify-self-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <EllipsisVertical className="size-5 justify-self-end" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href={`/customers/${documentNumber}`}>
                <DropdownMenuItem className="flex items-center gap-2 p-2 px-3 border bg-card rounded-lg cursor-pointer">
                  Editar
                  <Pencil className="size-4" />
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
