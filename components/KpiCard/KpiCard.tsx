import React from "react";
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { KpiCardProps } from "./KpiCard.types";

export default function KpiCard(props: KpiCardProps) {
  const { title, value, icon: IconComponent, tooltip, isPrimary } = props;

  return (
    <div className="p-4 rounded-xl bg-card flex items-center gap-2.5 relative group">
      <IconComponent
        className={`size-11 p-2.5 transition-all duration-300 group-hover:p-2 overflow-visible ${isPrimary ? "bg-black text-white dark:bg-white dark:text-black" : "bg-background"} rounded-full`}
        strokeWidth={1.5}
      />
      <div className="flex flex-col">
        <h2 className="text-sm text-gray-500 dark:text-gray-300 font-medium">{title}</h2>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <Tooltip>
        <TooltipTrigger className="absolute top-3.5 right-3.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4.5 text-muted-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </TooltipTrigger>
        <TooltipContent side="top" className="w-fit text-sm">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
