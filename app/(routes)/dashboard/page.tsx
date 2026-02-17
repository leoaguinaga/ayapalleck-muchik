import { CustomersTable } from "./components/CustomerTable";
import { GraphicRoomType } from "./components/GraphicRoomType";
import { MonthlyBookings } from "./components/MonthlyBookings";
import { Upload } from "lucide-react";
import DashboardKpis from "./components/DashboardKpis/DashboardKpis";
import { Button } from "@/components/ui/button";
import RoomCleanup from "./components/RoomCleanup/RoomCleanup";
import Greetings from "./components/Greetings/Greetings";

const data = [
  { title: "Ingreso hoy", value: "$1,280" },
  { title: "Ocupación actual", value: "80%" },
  { title: "Solicitudes pendientes", value: "12" },
  { title: "Total de ingresos", value: "$24,000" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col max-sm:gap-5 xs:flex-row items-center justify-between">
        <Greetings />
        <Button className="flex items-center gap-2 place-self-end">
          <Upload />
          <p>Exportar</p>
        </Button>
      </div>
      <DashboardKpis />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
        <div className="col-span-2">
          <CustomersTable />
        </div>
        <GraphicRoomType />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        <RoomCleanup />
        <MonthlyBookings />
      </div>
    </div>
  );
}
