"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BookingsTablePops } from "./BookingsTable.types";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/formatPrice";
import Tag from "@/components/Tag/Tag";
import { getInitials } from "@/lib/utils";
import { PaymentCell } from "@/app/(routes)/check-out/components/cells";

export const columns: ColumnDef<BookingsTablePops>[] = [
  {
    accessorKey: "customer",
    header: "Cliente",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
          {getInitials(row.getValue("customer") as string)}
        </div>
        <div className="flex flex-col">
          <span className="font-medium">
            {row.getValue("customer") as string} | 987 654 321
          </span>
          <span className="text-xs text-muted-foreground">DNI: 12312312</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "room",
    header: "Habitación",
    cell: ({ row }) => {
      const room = row.getValue("room") as string;
      return <p className="font-medium">{room} <span className="font-normal">(Suite)</span></p>;
    },
  },
  {
    accessorKey: "checkIn",
    header: "Estadía",
    cell: ({ row }) => {
      const checkIn = new Date(row.getValue("checkIn") as string);
      const checkOut = new Date(row.original.checkOut as string);
      const duration = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

      return (
        <p className="font-medium tabular-nums capitalize">
          {checkIn.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          })}
          {" → "}
          {checkOut.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          })}
          <span className="text-gray-600">{` (${duration} días)`}</span>
        </p>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Monto",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const paid = parseFloat(row.original.paid || "0");
      return <PaymentCell total={amount} paid={amount - paid} />;
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      if (status === "late") {
        return <Tag text="Cancelado" color="red" />;
      } else if (status === "punctual") {
        return <Tag text="Completado" color="blue" />;
      } else {
        return <Badge variant="secondary">Desconocido</Badge>;
      }
    },
  },
  // {
  //     accessorKey: "actions",
  //     header: "",
  //     cell: ({ row }) => {
  //         const customer = row.getValue("customer")

  //         return (
  //             <div className="justify-self-end">
  //                 <DropdownMenu>
  //                     <DropdownMenuTrigger asChild>
  //                         <Button variant="ghost" className="h-8 w-8 p-0">
  //                             <span className="sr-only">Open menu</span>
  //                             <EllipsisVertical className="size-5 justify-self-end" />
  //                         </Button>
  //                     </DropdownMenuTrigger>
  //                     <DropdownMenuContent align="end">
  //                         <DropdownMenuItem className="flex items-center gap-2 p-2 border bg-card rounded-lg cursor-pointer">
  //                             Ver detalles
  //                             <ArrowRight className="size-4" />
  //                         </DropdownMenuItem>
  //                     </DropdownMenuContent>
  //                 </DropdownMenu>
  //             </div>
  //         )
  //     }
  // }
];
