"use client"

import { ChevronRight } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import CreateReportForm from "./CreateReportForm"

interface CreateReportModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CreateReportModal({
  open,
  onOpenChange,
}: CreateReportModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1 font-bold">
            <span>Ayuda</span>
            <ChevronRight className="size-4" />
            <span>Reportar problema</span>
          </DialogTitle>
          <DialogDescription className="text-left">
            Envíanos el tipo de problema y una breve descripción. Se enviará un
            correo con el detalle del reporte.
          </DialogDescription>
        </DialogHeader>

        <CreateReportForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  )
}
