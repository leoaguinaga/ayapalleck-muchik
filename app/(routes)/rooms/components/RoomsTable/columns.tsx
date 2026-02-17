"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RoomsTableProps } from "./RoomsTable.types";
import { ArrowRight, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import Tag from "@/components/Tag/Tag";
import Link from "next/link";

// Helper para extraer valores que pueden venir envueltos en {value: ...}
const extractValue = (field: any): any => {
  if (field && typeof field === "object" && "value" in field) {
    return field.value;
  }
  return field;
};

export const columns: ColumnDef<RoomsTableProps>[] = [
  {
    accessorKey: "roomNumber",
    header: "Detalles",
    cell: ({ row }) => {
      const roomNumber = row.getValue("roomNumber") as string;
      const roomType = row.original.roomType;
      const name = extractValue(roomType?.name);

      return (
        <div className="flex items-center gap-2">
          <img
            src="/room-simple.webp"
            className="size-10 object-cover rounded-full"
            alt=""
          />
          <div className="flex flex-col items-start leading-tight -space-y-1">
            <span className="font-semibold text-lg">{roomNumber}</span>
            <span className="text-gray-600">{name}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "roomType.price",
    header: "Precio por noche",
    cell: ({ row }) => {
      const roomType = row.original.roomType;
      const price = extractValue(roomType?.price);
      return price ? (
        <p className="font-medium">S/ {Number(price).toFixed(2)}</p>
      ) : (
        <p className="font-medium text-muted-foreground">N/A</p>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Disponibilidad",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const normalizedStatus = status?.toUpperCase();

      switch (normalizedStatus) {
        case "OCCUPIED":
        case "OCUPADA":
          return <Tag text="Ocupada" color="orange" />;
        case "MAINTENANCE":
        case "MANTENIMIENTO":
          return <Tag text="Mantenimiento" color="red" />;
        case "DIRTY":
        case "SUCIA":
          return <Tag text="Sucia" color="yellow" />;
        case "AVAILABLE":
        case "DISPONIBLE":
        default:
          return <Tag text="Disponible" color="green" />;
      }
    },
  },
  {
    accessorKey: "available",
    header: "Estado",
    cell: ({ row }) => {
      const available = row.getValue("available") as boolean;
      return available ? (
        <Tag text="Limpia" color="blue" />
      ) : (
        <Tag text="Sucia" color="yellow" />
      );
    },
  },
  {
    accessorKey: "lastClean",
    header: "Ultima limpieza",
    cell: ({ row }) => {
      return (
        <p className="font-medium text-gray-600">12 Nov 14:12</p>
      )
    },
  },
  // {
  //   accessorKey: "actions",
  //   header: "",
  //   cell: ({ row }) => {
  //     const roomId = row.original.roomNumber;

  //     return (
  //       <div className="justify-self-end">
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-8 w-8 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <EllipsisVertical className="size-5 justify-self-end" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent
  //             align="end"
  //             className="z-50 opacity-100 !important"
  //           >
  //             <DropdownMenuItem>
  //               <Link
  //                 href={`/rooms/${roomId}`}
  //                 className="flex p-2 px-3 border rounded-lg cursor-pointer hover:outline-none gap-2 items-center bg-card opacity-100 z-10"
  //               >
  //                 Gestionar
  //                 <ArrowRight className="size-5" />
  //               </Link>
  //             </DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       </div>
  //     );
  //   },
  // },
];
