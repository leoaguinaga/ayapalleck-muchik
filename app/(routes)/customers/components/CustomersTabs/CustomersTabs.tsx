import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ActiveCustomersTable from "../ActiveCustomersTable"
import TopCustomersTable from "../TopCustomersTable"

export default function CustomersTabs() {
  return (
    <Tabs defaultValue="activeCustomers" className="w-ful">
      <TabsList className="p-1 py-1">
        <TabsTrigger value="activeCustomers">Huéspedes ingresados</TabsTrigger>
        <TabsTrigger value="topCustomers">Huéspedes más frecuentes</TabsTrigger>
      </TabsList>
      <TabsContent value="activeCustomers" className="mt-3">
        <ActiveCustomersTable />
      </TabsContent>
      <TabsContent value="topCustomers" className="mt-3">
        <TopCustomersTable />
      </TabsContent>
    </Tabs>
  )
}
