import DataTable from "./data-table"
import { columns } from "./column"
import { bookings } from "./CustomerTable.data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"


export async function CustomersTable() {
    return (
        <Card className="h-full gap-2 p-0 bg-background">
            <CardHeader className="p-0">
                <h2 className="text-lg font-semibold">Lista de huéspedes</h2>
            </CardHeader>
            <CardContent className="border-0 p-0">
                <DataTable columns={columns} data={bookings} />
            </CardContent>
        </Card>
    )
}
