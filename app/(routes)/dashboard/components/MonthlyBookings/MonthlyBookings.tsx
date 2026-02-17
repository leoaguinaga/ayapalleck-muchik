"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { monthlyBookingsData } from "./MonthlyBookings.data"

export const description = "A bar chart with a label"

const monthLabels = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
]

const chartConfig = {
  bookings: {
    label: "Reservas",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function MonthlyBookings() {
  const years = React.useMemo(() => {
    const yearSet = new Set<number>()
    monthlyBookingsData.forEach((item) => {
      const year = new Date(`${item.date}T00:00:00`).getFullYear()
      yearSet.add(year)
    })
    return Array.from(yearSet).sort((a, b) => a - b).map(String)
  }, [])

  const [selectedYear, setSelectedYear] = React.useState(
    () => years[years.length - 1] ?? String(new Date().getFullYear())
  )

  const chartData = React.useMemo(() => {
    const totals = new Map<number, number>()

    monthlyBookingsData.forEach((item) => {
      const date = new Date(`${item.date}T00:00:00`)
      if (String(date.getFullYear()) !== selectedYear) return

      const monthIndex = date.getMonth()
      totals.set(monthIndex, (totals.get(monthIndex) ?? 0) + item.bookings)
    })

    return Array.from(totals.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([monthIndex, bookings]) => ({
        month: monthLabels[monthIndex],
        bookings,
      }))
  }, [selectedYear])

  const rangeLabel = React.useMemo(() => {
    if (!chartData.length) return selectedYear
    return `${chartData[0].month} - ${chartData[chartData.length - 1].month} ${selectedYear}`
  }, [chartData, selectedYear])

  const trendLabel = React.useMemo(() => {
    if (chartData.length < 2) return "Sin datos suficientes"
    const last = chartData[chartData.length - 1].bookings
    const prev = chartData[chartData.length - 2].bookings
    if (prev === 0) return "Variación sin referencia"
    const delta = ((last - prev) / prev) * 100
    const formatted = Math.abs(delta).toFixed(1)
    return delta >= 0
      ? `Subió ${formatted}% vs mes anterior`
      : `Bajó ${formatted}% vs mes anterior`
  }, [chartData])

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-start justify-between gap-3 space-y-0 py-5 sm:flex-row">
        <div>
          <CardTitle className="text-lg font-semibold">Reservas por mes</CardTitle>
          <CardDescription>{rangeLabel}</CardDescription>
        </div>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger size="sm" className="w-[130px]">
            <SelectValue placeholder="Año" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="bookings" fill="var(--color-bookings)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {trendLabel} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total de reservas por mes en el año seleccionado
        </div>
      </CardFooter>
    </Card>
  )
}
