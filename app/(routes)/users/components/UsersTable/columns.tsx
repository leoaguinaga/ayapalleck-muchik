"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowRight, EllipsisVertical, Link, Pencil } from "lucide-react"
import Tag from "@/components/Tag/Tag"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { UsersTableProps } from "./UsersTable.types"

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
            return (
                <div className="justify-self-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <EllipsisVertical className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Pencil className="w-4 h-4 mr-2" />
                                Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link className="w-4 h-4 mr-2" />
                                View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Manage Permissions
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]