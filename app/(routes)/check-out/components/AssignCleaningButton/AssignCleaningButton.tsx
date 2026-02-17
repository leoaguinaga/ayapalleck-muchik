import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { BrushCleaning, ChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useState } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import CleanerSelector from "../CleanerSelector/CleanerSelector";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

export default function AssignCleaningButton() {
  const [selectedCleaner, setSelectedCleaner] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAssign = () => {
    if (!selectedCleaner) {
      toast.error("Por favor selecciona un limpiador");
      return;
    }
    toast.success(`Limpieza asignada a ${selectedCleaner}`);
    setIsOpen(false);
    setSelectedCleaner("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <BrushCleaning className="size-4.5" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>Asignar limpieza</TooltipContent>
      </Tooltip>
      <DialogContent className="sm:max-w-150">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 font-bold">
            Estadías
            <ChevronRight className="size-4.5" />
            Asignar limpieza
          </DialogTitle>
          <DialogDescription className="text-left">
            Asigna una limpieza para la estadía seleccionada.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Habitación</label>
            <Input value={101} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Limpiador</label>
            <CleanerSelector
              value={selectedCleaner}
              onChange={setSelectedCleaner}
              placeholder="Selecciona un limpiador"
              className="w-full"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleAssign}>Asignar limpieza</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
