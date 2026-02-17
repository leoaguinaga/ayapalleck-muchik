import { KpiCardProps } from "@/components/KpiCard/KpiCard.types";
import { TrendingUp, ArrowUp, ArrowDown, Calendar, Clock } from "lucide-react";

export const movementHistoryInfoData: KpiCardProps[] = [
  { title: "Total movimientos", value: "156", tooltip: "Total de movimientos registrados", icon: TrendingUp, isPrimary: true },
  { title: "Entradas", value: "89", tooltip: "Total de entradas al inventario", icon: ArrowUp },
  { title: "Salidas", value: "67", tooltip: "Total de salidas del inventario", icon: ArrowDown },
  { title: "Este mes", value: "42", tooltip: "Movimientos registrados en el mes actual", icon: Calendar },
  { title: "Último movimiento", value: "Hoy", tooltip: "Fecha del último movimiento registrado", icon: Clock },
];
