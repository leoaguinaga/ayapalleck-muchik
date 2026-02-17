"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RoomCleanupProps } from "./RoomCleanup.types";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type CleanerOption = {
  name: string;
  available: boolean;
};

type CreateColumnsArgs = {
  cleaners: CleanerOption[];
  onAssign: (roomId: string, cleanerName: string) => void;
};

const statusConfig: Record<
  RoomCleanupProps["status"],
  { label: string; className: string }
> = {
  booked: {
    label: "Reservada",
    className: "border-amber-200 bg-amber-50 text-amber-700",
  },
  "not booked": {
    label: "No reservada",
    className: "border-slate-200 bg-slate-50 text-slate-600",
  },
};

const taskConfig: Record<
  RoomCleanupProps["task"],
  { label: string; className: string }
> = {
  clean: {
    label: "Limpia",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  dirty: {
    label: "Sucia",
    className: "border-red-200 bg-red-50 text-red-700",
  },
};

export function createColumns({
  cleaners,
  onAssign,
}: CreateColumnsArgs): ColumnDef<RoomCleanupProps>[] {
  return [
    {
      id: "room",
      header: "Habitación",
      accessorFn: (row) => row.room.number,
      cell: ({ getValue }) => (
        <p className="font-medium">{getValue<string>()}</p>
      ),
    },
    {
      id: "status",
      header: "Estado",
      accessorKey: "status",
      cell: ({ getValue }) => {
        const status = getValue<RoomCleanupProps["status"]>();
        const config = statusConfig[status];
        return (
          <Badge
            variant="outline"
            className={cn(config.className, " bg-white")}
          >
            {config.label}
          </Badge>
        );
      },
    },
    {
      id: "task",
      header: "Tarea",
      accessorKey: "task",
      cell: ({ getValue }) => {
        const task = getValue<RoomCleanupProps["task"]>();
        const config = taskConfig[task];
        return (
          <Badge
            variant="outline"
            className={cn(config.className, " bg-white")}
          >
            {config.label}
          </Badge>
        );
      },
    },
    {
      id: "assignedTo",
      header: "Asignado a",
      accessorKey: "assignedTo",
      cell: ({ row }) => {
        const currentAssignee = row.original.assignedTo?.trim();
        const currentTask = row.original.task;
        const selectValue = currentAssignee ? currentAssignee : "unassigned";

        if (currentTask === "clean") {
          return <p>-</p>;
        } else {
          return (
            <Select
              value={selectValue}
              onValueChange={(value) =>
                onAssign(
                  row.original.room.id,
                  value === "unassigned" ? "" : value
                )
              }
            >
              <SelectTrigger size="sm" className="w-[200px]">
                <SelectValue placeholder="Sin asignar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unassigned">Sin asignar</SelectItem>
                {cleaners.map((cleaner) => (
                  <SelectItem
                    key={cleaner.name}
                    value={cleaner.name}
                    disabled={!cleaner.available}
                  >
                    {cleaner.name}
                    {cleaner.available ? "" : " (No disponible)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        }
      },
    },
  ];
}
