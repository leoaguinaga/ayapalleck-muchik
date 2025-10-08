"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TableRoomBookingsProps } from "./TableRoomBookings.types";
import { EllipsisVertical } from "lucide-react";

export const columns: ColumnDef<TableRoomBookingsProps>[] = [
    {
        accessorKey: "customerName",
        header: "Cliente",
    },
    {
        accessorKey: "startDate",
        header: "Entrada",
    },
    {
        accessorKey: "state",
        header: "Estado",
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const room = row.original
            return (<EllipsisVertical className="size-4.5 cursor-pointer text-muted-foreground w-fit place-self-end" />)
        }
    }
]