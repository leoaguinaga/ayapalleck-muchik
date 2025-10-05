"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RoomsTableProps } from "./RoomsTable.types"
import { BadgeCheck, EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<RoomsTableProps>[] = [
    {
        accessorKey: "roomNumber",
        header: "N° Habitación",
    },
    {
        accessorKey: "roomType",
        header: "Tipo de habitación",
    },
    {
        accessorKey: "price",
        header: "Precio por noche",
        cell: ({ row }) => {
            const price = row.getValue("price") as number
            return (
                <p className="font-medium">S/{price.toFixed(2)}</p>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Disponibilidad",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            switch (status) {
                case "occupied":
                    return <span className="font-semibold py-1 px-2 rounded-lg bg-orange-300 text-orange-700 w-fit dark:bg-orange-700/30 dark:text-orange-500">Ocupada</span>;
                default:
                    return <span className="font-semibold py-1 px-2 rounded-lg bg-green-300 text-green-700 w-fit dark:bg-green-700/30 dark:text-green-500">Disponible</span>;
            }
        }
    },
    {
        accessorKey: "isClean",
        header: "Limpieza",
        cell: ({ row }) => {
            const isClean = row.getValue("isClean") as boolean;
            return isClean ? (
                <span className="font-semibold py-1 px-2 rounded-lg bg-blue-300 text-blue-700 w-fit dark:bg-blue-700/30 dark:text-blue-500">Limpia</span>
            ) : (
                <span className="font-semibold py-1 px-2 rounded-lg bg-yellow-300 text-yellow-700 w-fit dark:bg-yellow-700/30 dark:text-yellow-500">Sucio</span>
            )
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
                            <DropdownMenuItem className="flex items-center gap-2 p-2 px-3 border bg-card rounded-lg cursor-pointer">
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