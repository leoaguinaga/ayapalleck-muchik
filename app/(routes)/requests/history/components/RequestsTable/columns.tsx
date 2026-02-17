"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RequestsTableProps } from "./RequestsTable.types";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/utils";
import Tag from "@/components/Tag/Tag";

export const columns: ColumnDef<RequestsTableProps>[] = [
  {
    accessorKey: "customerName",
    header: "Cliente",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
          {getInitials(row.getValue("customerName") as string)}
        </div>
        <div className="flex flex-col">
          <span className="font-medium">
            {row.getValue("customerName") as string}
          </span>
          <span className="text-xs text-muted-foreground">
            {row.original.customerEmail}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Fecha de registro",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date") as string);
      return (
        <p className="font-medium tabular-nums capitalize">
          {date.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "bookingDate",
    header: "Fecha solicitada",
    cell: ({ row }) => {
      const bookingDate = new Date(row.getValue("bookingDate") as string);
      const bookingEndDate = new Date(bookingDate);
      bookingEndDate.setDate(
        bookingEndDate.getDate() + row.original.duration - 1
      );
      return (
        <p className="font-medium tabular-nums capitalize">
          {bookingDate.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          })}
          {" → "}
          {bookingEndDate.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          })}
          <span className="text-gray-600">{` (${row.original.duration} días)`}</span>
        </p>
      );
    },
  },
  {
    accessorKey: "roomType",
    header: "Habitación deseada",
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="bg-slate-50 text-slate-700 border-slate-200"
      >
        {row.getValue("roomType") as string}
      </Badge>
    ),
  },
  {
    accessorKey: "state",
    header: "Estado",
    cell: ({ row }) => {
      const text = row.getValue("state") as string;

      const handleState = (state: string) => {
        switch (state) {
          case "Aprobado":
            return (
              <div className="flex items-center gap-1">
                <Tag color="green" text="Aprobada" />{" "}
                <p className="text-sm font-medium">
                  {row.original.roomNumber
                    ? ` - Hab. ${row.original.roomNumber}`
                    : ""}
                </p>
              </div>
            );
            break;
          case "Rechazado":
            return <Tag color="red" text="Rechazada" />;
            break;
          default:
            return <Tag color="yellow" text={state} />;
        }
      };
      return handleState(text);
    },
  },
];
