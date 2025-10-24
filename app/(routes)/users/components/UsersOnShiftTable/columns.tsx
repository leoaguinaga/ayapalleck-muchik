"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EllipsisVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { UsersOnShiftTableProps } from "./UsersOnShiftTable.types"
import Tag from "@/components/Tag/Tag"

export const columns: ColumnDef<UsersOnShiftTableProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "phone",
        header: "Teléfono",
    },
    {
        accessorKey: "asistence",
        header: "Asistencia",
        cell: ({ row }) => {
            const asistence = row.getValue("asistence") as boolean
            return asistence ? <Tag color="blue" text="Presente" /> : <Tag color="red" text="Ausente"/>
        }
    },
    {
        id: "actions",
        header: "",
        cell: ({ row }) => {
            return (
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <EllipsisVertical className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                Ver detalles
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Marcar ausente
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]
