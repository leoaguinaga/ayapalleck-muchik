import React from "react";
import { inventoryData } from "../InventoryTable/InventoryTable.data";
import Tag from "@/components/Tag/Tag";
import { AlertTriangle } from "lucide-react";

export default function LowStockAlert() {
  const lowStockProducts = inventoryData.filter(
    (product) => product.stock < product.minStock
  );

  if (lowStockProducts.length === 0) {
    return (
      <div className="border rounded-lg p-5 bg-card">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          Alertas de Stock Bajo
        </h3>
        <p className="text-sm text-muted-foreground text-center py-4">
          No hay productos con stock bajo
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl p-4 bg-card h-full">
      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
        Alertas de Stock Bajo
      </h3>
      <div className="h-full overflow-y-auto">
        <div className="flex flex-col gap-3">
          {lowStockProducts.map((product) => (
            <div
              key={product.id}
              className="p-3 border border-red-200 dark:border-red-900 rounded-lg bg-red-50 dark:bg-red-950/20"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-sm truncate">
                      {product.name} 
                      <span className="text-gray-600">{" "}({product.unit})</span>
                    </p>
                    <Tag
                      text={product.category}
                      color={product.category === "Venta" ? "blue" : "purple"}
                    />
                  </div>

                  <div className="flex items-start mt-1.25 gap-0.75 flex-col text-xs">
                    <span className="font-semibold text-red-600">
                      {"Stock actual: "}{product.stock} 
                    </span>
                    <span>
                      {"Stock mínimo: "}
                      {product.minStock} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
