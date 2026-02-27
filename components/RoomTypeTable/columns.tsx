"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RoomTypeTableProps } from "./RoomTypeTable.types"
import { EllipsisVertical, Pencil, Power } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Helper para extraer valores que pueden venir envueltos en {value: ...}
const extractValue = (field: any): any => {
    if (field && typeof field === 'object' && 'value' in field) {
        return field.value;
    }
    return field;
};

type CreateColumnsProps = {
    onEdit: (roomType: RoomTypeTableProps) => void
    onDeactivate: (roomType: RoomTypeTableProps) => void
}

export function createColumns({ onEdit, onDeactivate }: CreateColumnsProps): ColumnDef<RoomTypeTableProps>[] {
    return [
        {
            accessorKey: "name",
            header: "Nombre",
            cell: ({ row }) => {
                const name = extractValue(row.original.name)
                return <p className="font-medium">{name ?? "N/A"}</p>
            },
        },
        {
            accessorKey: "description",
            header: "Descripción",
            cell: ({ row }) => {
                const description = extractValue(row.original.description)
                return (
                    <p className="max-w-[320px] truncate text-muted-foreground">
                        {description || "Sin descripción"}
                    </p>
                )
            },
        },
        {
            accessorKey: "price",
            header: "Precio",
            cell: ({ row }) => {
                const price = extractValue(row.original.price)
                return <p className="font-medium tabular-nums">S/{Number(price ?? 0).toFixed(2)}</p>
            },
        },
        {
            accessorKey: "available",
            header: "Estado",
            cell: ({ row }) => {
                const available = Boolean(extractValue(row.original.available))
                return available ? (
                    <Badge className="bg-emerald-600 text-white">Activo</Badge>
                ) : (
                    <Badge variant="secondary">Inactivo</Badge>
                )
            },
        },
        {
            id: "actions",
            header: "",
            cell: ({ row }) => {
                const roomType = row.original
                const available = Boolean(extractValue(roomType.available))

                return (
                    <div className="flex justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <EllipsisVertical className="size-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="flex items-center gap-2" onClick={() => onEdit(roomType)}>
                                    Editar
                                </DropdownMenuItem>
                                {available && (
                                    <DropdownMenuItem
                                        className="flex items-center gap-2 text-destructive"
                                        onClick={() => onDeactivate(roomType)}
                                    >
                                        Desactivar
                                    </DropdownMenuItem>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )
            },
        }
    ]
}
