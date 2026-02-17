"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { roomType: "simple", reservas: 275, fill: "var(--chart-1)" },
  { roomType: "matrimonial", reservas: 200, fill: "var(--chart-2)" },
  { roomType: "doble", reservas: 187, fill: "var(--chart-3)" },
  { roomType: "king", reservas: 173, fill: "var(--chart-4)" },
  { roomType: "queen", reservas: 90, fill: "var(--chart-5)" },
]

const chartConfig = {
  reservas: {
    label: "Reservas",
  },
  simple: {
    label: "Simple",
    color: "var(--chart-1)",
  },
  matrimonial: {
    label: "Matrimonial",
    color: "var(--chart-2)",
  },
  doble: {
    label: "Doble",
    color: "var(--chart-3)",
  },
  king: {
    label: "King",
    color: "var(--chart-4)",
  },
  queen: {
    label: "Queen",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function GraphicRoomType() {
  const totalReservas = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.reservas, 0)
  }, [])

  return (
    <Card className="h-full gap-2 p-0 pt-4 dark:bg-black/80">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-lg font-semibold">Reservas por tipo de habitación</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer
          id="room-type-chart"
          config={chartConfig}
          className="mx-auto aspect-square max-h-80"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="reservas"
              nameKey="roomType"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalReservas.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Reservas
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="roomType" />}
              className="-translate-y-1 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
