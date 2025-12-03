"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RoomsTableProps } from "./RoomsTable.types"
import { ArrowRight, EllipsisVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import Tag from "@/components/Tag/Tag"
import Link from "next/link"

// Helper para extraer valores que pueden venir envueltos en {value: ...}
const extractValue = (field: any): any => {
    if (field && typeof field === 'object' && 'value' in field) {
        return field.value;
    }
    return field;
};

export const columns: ColumnDef<RoomsTableProps>[] = [
    {
        accessorKey: "roomNumber",
        header: "N° Habitación",
    },
    {
        accessorKey: "roomType.name",
        header: "Tipo de habitación",
        cell: ({ row }) => {
            const roomType = row.original.roomType;
            const name = extractValue(roomType?.name);
            return name ?? "N/A";
        }
    },
    {
        accessorKey: "roomType.price",
        header: "Precio por noche",
        cell: ({ row }) => {
            const roomType = row.original.roomType;
            const price = extractValue(roomType?.price);
            return price ? (
                <p className="font-medium">S/{Number(price).toFixed(2)}</p>
            ) : (
                <p className="font-medium text-muted-foreground">N/A</p>
            );
        }
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
        }
    },
    {
        accessorKey: "available",
        header: "Estado",
        cell: ({ row }) => {
            const available = row.getValue("available") as boolean;
            return available ? (
                <Tag text="Activa" color="blue" />
            ) : (
                <Tag text="Inactiva" color="gray" />
            )
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const roomId = row.original.id;

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
                            <DropdownMenuItem>
                                <Link href={`/rooms/${roomId}`} className="flex p-2 px-3 border bg-card rounded-lg cursor-pointer hover:outline-none gap-2 items-center">
                                    Gestionar
                                    <ArrowRight className="size-5" />
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]