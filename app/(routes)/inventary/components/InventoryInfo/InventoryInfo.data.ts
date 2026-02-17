import { KpiCardProps } from "@/components/KpiCard/KpiCard.types";
import { Package, ShoppingCart, Warehouse, AlertTriangle } from "lucide-react";

export const inventoryData: KpiCardProps[] = [
  { 
    title: "Total productos", 
    value: "45", 
    tooltip: "Total de productos registrados en el inventario",
    icon: Package,
    isPrimary: true
  },
  { 
    title: "Productos de venta", 
    value: "20", 
    tooltip: "Productos de categoría venta (gaseosas, galletas, etc.)",
    icon: ShoppingCart
  },
  { 
    title: "Productos de almacén", 
    value: "25", 
    tooltip: "Productos de categoría almacén (toallas, almohadas, etc.)",
    icon: Warehouse
  },
  { 
    title: "Stock bajo", 
    value: "8", 
    tooltip: "Productos con stock por debajo del mínimo",
    icon: AlertTriangle
  },
]
