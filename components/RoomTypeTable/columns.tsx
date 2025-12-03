"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RoomTypeTableProps } from "./RoomTypeTable.types"
import { EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"

// Helper para extraer valores que pueden venir envueltos en {value: ...}
const extractValue = (field: any): any => {
    if (field && typeof field === 'object' && 'value' in field) {
        return field.value;
    }
    return field;
};

export const columns: ColumnDef<RoomTypeTableProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
        cell: ({ row }) => {
            const name = extractValue(row.original.name);
            return name ?? "N/A";
        }
    },
    {
        accessorKey: "price",
        header: "Precio",
        cell: ({ row }) => {
            const price = extractValue(row.original.price);
            return price ? `S/${Number(price).toFixed(2)}` : "N/A";
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {

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
                            <DropdownMenuItem className="flex items-center gap-2 p-2 border bg-card rounded-lg cursor-pointer">
                                Editar
                                <Pencil className="size-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]