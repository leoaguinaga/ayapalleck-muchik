import { KpiCardProps } from "@/components/KpiCard/KpiCard.types";
import { Bed, Sparkles, DollarSign, Users } from "lucide-react";

export const roomsData: KpiCardProps[] = [
  { 
    title: "Disponibilidad", 
    value: "30%", 
    tooltip: "Hay 30 habitaciones disponibles",
    icon: Bed,
    isPrimary: true
  },
  { 
    title: "Limpieza", 
    value: "65%", 
    tooltip: "Hay 65 habitaciones limpias",
    icon: Sparkles
  },
  { 
    title: "Balance", 
    value: "S/570", 
    tooltip: "Ingresos totales S/690",
    icon: DollarSign
  },
  { 
    title: "Comisiones", 
    value: "S/120", 
    tooltip: "Por 4 recomendaciones",
    icon: Users
  },  
]