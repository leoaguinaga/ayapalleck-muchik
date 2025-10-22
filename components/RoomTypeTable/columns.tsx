"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RoomTypeTableProps } from "./RoomTypeTable.types"
import { ArrowRight, EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<RoomTypeTableProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "price",
        header: "Precio",
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