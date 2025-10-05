import CardSummary from "./components/CardSummary"
import { CustomersTable } from "./components/CustomerTable"
import { GraphicRoomType } from "./components/GraphicRoomType"
import { MonthlyBookings } from "./components/MonthlyBookings"

const data = [
  { title: "Ingreso hoy", value: "$1,280" },
  { title: "Ocupación actual", value: "80%" },
  { title: "Solicitudes pendientes", value: "12" },
  { title: "Total de ingresos", value: "$24,000" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((card, index) => (
          <CardSummary key={index} title={card.title} value={card.value} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
        <div className="col-span-3">
          <CustomersTable />
        </div>
        <GraphicRoomType />
      </div>
      <MonthlyBookings />
    </div>
  )
}
