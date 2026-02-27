"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, PackagePlus } from "lucide-react";
import { useState } from "react";
import CreateRoomTypeForm from "../CreateRoomTypeForm";

export default function CreateRoomTypeButton() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
      <DialogTrigger asChild>
        <Button className="w-fit p-2 flex items-center gap-1.5">
          <PackagePlus className="size-4" />
          <p>Registrar</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-140">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 font-bold">
            <p>Tipo de habitación</p>
            <ChevronRight className="size-4.5" />
            <p>Agregar Tipo</p>
          </DialogTitle>
          <DialogDescription className="text-left">
            Aquí podrás agregar un nuevo tipo de habitación a la plataforma.
          </DialogDescription>
        </DialogHeader>
        <CreateRoomTypeForm setOpenModalCreateCustomer={setOpenModalCreate} />
      </DialogContent>
    </Dialog>
  );
}
