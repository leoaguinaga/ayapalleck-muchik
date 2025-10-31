"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RoomsTableProps } from "./RoomsTable.types"
import { ArrowRight, BadgeCheck, EllipsisVertical, Pencil } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import Tag from "@/components/Tag/Tag"
import Link from "next/link"

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
                    return <Tag text="Ocupada" color="orange" />;
                default:
                    return <Tag text="Disponible" color="green" />;
            }
        }
    },
    {
        accessorKey: "isClean",
        header: "Limpieza",
        cell: ({ row }) => {
            const isClean = row.getValue("isClean") as boolean;
            return isClean ? (
                <Tag text="Limpio" color="blue" />
            ) : (
                <Tag text="Sucio" color="yellow" />
            )
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const roomNumber = row.getValue("roomNumber");

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
                                <Link href={`/rooms/${roomNumber}`} className="flex p-2 px-3 border bg-card rounded-lg cursor-pointer hover:outline-none gap-2 items-center">
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