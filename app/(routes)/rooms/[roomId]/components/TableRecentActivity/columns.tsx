"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TableRecentActivity } from "./TableRecentActivity.types"

export const columns: ColumnDef<TableRecentActivity>[] = [
    {
        accessorKey: "action",
        header: "Acción",
        cell: ({ row }) => {
                    const status = row.getValue("action") as string;
                    switch (status) {
                        case "occupied":
                            return "Se marcó como ocupada";
                        case "clean":
                            return "Se marcó como limpia";
                        case "dirty":
                            return "Se marcó como sucia";
                        case "available":
                            return "Se marcó como disponible";
                    }
                }
    },
    {
        accessorKey: "date",
        header: "Fecha",
    },
]