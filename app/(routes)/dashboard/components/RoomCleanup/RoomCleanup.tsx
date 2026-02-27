"use client"

import * as React from "react"
import DataTable from "./data-table"
import { createColumns } from "./column"
import { roomCleanupData } from "./RoomCleanup.data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { RoomCleanupProps } from "./RoomCleanup.types"
import { usersData } from "@/app/(routes)/users/components/UsersTable/UsersTable.data"

export default function RoomCleanup() {
    const [data, setData] = React.useState<RoomCleanupProps[]>(roomCleanupData)

    const cleaners = React.useMemo(
        () =>
            usersData
                .filter((user) => user.role.toLowerCase() === "limpieza")
                .map((user) => ({
                    name: user.name,
                    available: user.available,
                })),
        []
    )

    const handleAssign = React.useCallback((roomId: string, cleanerName: string) => {
        setData((prev) =>
            prev.map((row) =>
                row.room.id === roomId
                    ? {
                        ...row,
                        assignedTo: cleanerName,
                    }
                    : row
            )
        )
    }, [])

    const columns = React.useMemo(
        () => createColumns({ cleaners, onAssign: handleAssign }),
        [cleaners, handleAssign]
    )

    return (
        <Card className="h-full gap-2 p-0 bg-background">
            <CardHeader className="p-0">
                <h2 className="text-lg font-semibold">Limpieza de habitaciones</h2>
            </CardHeader>
            <CardContent className="border-0 p-0">
                <DataTable columns={columns} data={data} />
            </CardContent>
        </Card>
    )
}
