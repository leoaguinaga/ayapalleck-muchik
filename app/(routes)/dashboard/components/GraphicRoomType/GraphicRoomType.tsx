"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a legend"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Simple",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Matrimonial",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Doble",
    color: "var(--chart-3)",
  },
  edge: {
    label: "King",
    color: "var(--chart-4)",
  },
  other: {
    label: "Queen",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function GraphicRoomType() {
  return (
    <Card className="pt-5">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl font-semibold">Reservas por tipo de habitación</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 mt-2">
        <ChartContainer
          id="room-type-chart"
          config={chartConfig}
          className="mx-auto aspect-square max-h-[320px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-1 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
