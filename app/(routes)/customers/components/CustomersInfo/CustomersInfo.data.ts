import { KpiCardProps } from "@/components/KpiCard/KpiCard.types";
import { Users, UserCheck, UserPlus, Calendar, Cake } from "lucide-react";

export const customersData: KpiCardProps[] = [
  { 
    title: "Total huéspedes", 
    value: "30", 
    tooltip: "Total de registros en la tabla Customer (customerId)",
    icon: Users,
    isPrimary: true
  },
  { 
    title: "Huéspedes activos", 
    value: "25", 
    tooltip: "Clientes con available = true",
    icon: UserCheck
  },
  { 
    title: "Huéspedes nuevos", 
    value: "5", 
    tooltip: "Registros creados en los últimos 7 días",
    icon: UserPlus
  },
  { 
    title: "Estadía promedio", 
    value: "3 noches", 
    tooltip: "Promedio calculado a partir de los bookings relacionados (checkIn/checkOut)",
    icon: Calendar
  }
]