import DataTable from "./data-table"
import { columns } from "./column"
import { bookings } from "./CustomerTable.data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"


export async function CustomersTable() {
    return (
        <Card className="h-full gap-4">
            <CardHeader>
                <h2 className="text-xl font-semibold">Reservas recientes</h2>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={bookings} />
            </CardContent>
        </Card>
    )
}
