"use client"

import { Loader2 } from "lucide-react"
import { type FormEvent, useMemo, useState } from "react"
import toast from "react-hot-toast"

import { authClient } from "@/lib/auth-client"
import api from "@/lib/api"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const REPORT_TYPES = [
  { value: "RENDIMIENTO", label: "Rendimiento" },
  { value: "ERROR", label: "Error" },
  { value: "DATOS", label: "Datos" },
  { value: "UX", label: "Interfaz" },
  { value: "OTRO", label: "Otro" },
] as const

type ReportType = (typeof REPORT_TYPES)[number]["value"]

interface CreateReportFormProps {
  onSuccess?: () => void
}

export default function CreateReportForm({ onSuccess }: CreateReportFormProps) {
  const { data: session } = authClient.useSession()

  const [type, setType] = useState<ReportType>("ERROR")
  const [details, setDetails] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const reporterName = useMemo(() => {
    const rawName = session?.user?.name?.trim() || ""
    return rawName || "Usuario sin nombre"
  }, [session?.user?.name])

  const reporterEmail = session?.user?.email?.trim() || ""

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!details.trim()) {
      toast.error("Describe el problema antes de enviarlo")
      return
    }

    try {
      setIsSubmitting(true)

      await api.post("/support/report-problem", {
        type,
        details: details.trim(),
        reporterName,
        reporterEmail,
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        userAgent:
          typeof window !== "undefined" ? window.navigator.userAgent : undefined,
      })

      toast.success("Reporte enviado correctamente")
      setDetails("")
      setType("ERROR")
      onSuccess?.()
    } catch (error) {
      console.error(error)
      toast.error("No se pudo enviar el reporte")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label>Tipo de problema</Label>
        <div className="flex flex-wrap gap-2">
          {REPORT_TYPES.map((item) => {
            const selected = item.value === type

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setType(item.value)}
                className={cn(
                  "rounded-full border px-3 py-1 text-sm font-medium transition-colors",
                  selected
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-black hover:border-black",
                )}
                aria-pressed={selected}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="report-details">Describe el problema</Label>
        <Textarea
          id="report-details"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Ejemplo: En check-in el filtro de habitaciones no responde cuando selecciono un tipo y luego limpio la búsqueda..."
          className="min-h-32 resize-none"
          maxLength={1500}
        />
        <p className="text-muted-foreground text-xs text-right">
          {details.length}/1500
        </p>
      </div>

      <Button type="submit" disabled={isSubmitting || !details.trim()}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar"
        )}
      </Button>
    </form>
  )
}
