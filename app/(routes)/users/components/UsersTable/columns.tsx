"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EllipsisVertical, Pencil } from "lucide-react"
import Tag from "@/components/Tag/Tag"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { UsersTableProps } from "./UsersTable.types"
import Link from "next/link"

export const columns: ColumnDef<UsersTableProps>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "shift",
        header: "Turno",
        cell: ({ row }) => {
            const shift = row.getValue("shift") as string
            const shiftColor: Record<string, string> = {
                mañana: "yellow",
                tarde: "orange",
                noche: "blue",
            }
            return (
                <Tag
                    text={shift}
                    color={shiftColor[shift.toLowerCase()] || "gray"}
                />
            )
        }
    },
    {
        accessorKey: "role",
        header: "Rol",
        cell: ({ row }) => {
            const role = row.getValue("role") as string
            const roleColors: Record<string, string> = {
                administrador: "purple",
                recepcionista: "blue",
                limpieza: "green",
            }
            return (
                <Tag
                    text={role}
                    color={roleColors[role.toLowerCase()] || "gray"}
                />
            )
        }
    },
    {
        accessorKey: "available",
        header: "Estado",
        cell: ({ row }) => {
            const available = row.getValue("available") as boolean
            return (
                <Tag
                    text={available ? "Disponible" : "No disponible"}
                    color={available ? "green" : "gray"}
                />
            )
        }
    },
    {
        id: "actions",
        header: "",
        cell: ({ row }) => {
            const { email } = row.original;

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
                            <Link href={`/users/${email}`}>
                                <DropdownMenuItem className="flex items-center gap-2 p-2 px-3 border bg-card rounded-lg cursor-pointer">
                                    Editar
                                    <Pencil className="size-4" />
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]