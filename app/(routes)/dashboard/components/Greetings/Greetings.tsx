"use client"

import * as React from "react"
import { authClient } from "@/lib/auth-client"

function formatSpanishDate(date: Date) {
  const formatted = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)

  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

function getFirstName(name?: string | null) {
  const trimmed = (name ?? "").trim()
  if (!trimmed) return ""
  return trimmed.split(/\s+/)[0]
}

export default function Greetings() {
  const { data: session } = authClient.useSession()
  const firstName = getFirstName(session?.user?.name)
  const todayLabel = React.useMemo(() => formatSpanishDate(new Date()), [])

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-bold">
        Bienvenido de vuelta{firstName ? `, ${firstName}` : ""}!
      </h1>
      <p className="font-medium text-gray-500">{todayLabel}</p>
    </div>
  )
}