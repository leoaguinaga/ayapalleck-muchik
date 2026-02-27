"use client"

import { TriangleAlert } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import CreateReportModal from "./CreateReportModal"

export default function CreateReportButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="flex items-center gap-2 w-full mt-2">
        <TriangleAlert className="size-4" />
        Reportar problema
      </Button>

      <CreateReportModal open={open} onOpenChange={setOpen} />
    </>
  )
}
