import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { ChevronRight, Receipt } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export default function GenerateReceiptButton() {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Receipt className="size-4.5" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>Generar recibo</TooltipContent>
      </Tooltip>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 font-bold">
            Estadías
            <ChevronRight className="size-4.5" />
            Generar recibo
          </DialogTitle>
          <DialogDescription>
            Genera un recibo para la estadía seleccionada.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-4 px-5 rounded-xl border border-dashed bg-muted/30">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
            Detalles de la estadía
          </h3>
          {/* <div className="h-px bg-border" /> */}
          <div className="grid grid-cols-2 gap-y-2 text-sm font-medium">
            <span className="text-muted-foreground">Huésped</span>
            <span className="text-right">Juan Pérez - DNI: 10203040</span>
            <span className="text-muted-foreground">Habitación</span>
            <span className="text-right">101 - Suite</span>
            <span className="text-muted-foreground">Check-in</span>
            <span className="text-right">01 Jun 2024</span>
            <span className="text-muted-foreground">Check-out</span>
            <span className="text-right">05 Jun 2024</span>
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mt-2">
            Resumen de cargos
          </h3>
            <div className="flex flex-col gap-3 text-sm rounded-xl border">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-gray-500">
                    <th className="text-left font-semibold py-2 px-3">Cargo</th>
                    <th className="text-center font-semibold py-2 px-3">Cant.</th>
                    <th className="text-right font-semibold py-2 px-3">P.U.</th>
                    <th className="text-right font-semibold py-2 px-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-2">Suite - 4 días</td>
                    <td className="text-center py-2 px-2">4</td>
                    <td className="text-right py-2 px-2">S/ 125.00</td>
                    <td className="text-right font-semibold py-2 px-2">S/ 500.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Coca Cola 500ml</td>
                    <td className="text-center py-2 px-2">1</td>
                    <td className="text-right py-2 px-2">S/ 4.00</td>
                    <td className="text-right font-semibold py-2 px-2">S/ 4.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-between px-2">
                <span className="font-semibold">Total a pagar</span>
                <span className="text-lg font-bold">S/ 504.00</span>
              </div>
            </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancelar</Button>
          <Button>Generar recibo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
