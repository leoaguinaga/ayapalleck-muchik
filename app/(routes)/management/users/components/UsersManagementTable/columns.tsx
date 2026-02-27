"use client";

import { ColumnDef } from "@tanstack/react-table";
import Tag from "@/components/Tag/Tag";
import { User } from "@/lib/api/users";

const roleLabelMap: Record<string, string> = {
  ADMIN: "Administrador",
  RECEPTIONIST: "Recepcionista",
  HOUSEKEEPING: "Limpieza",
};

const roleColorMap: Record<string, string> = {
  ADMIN: "purple",
  RECEPTIONIST: "blue",
  HOUSEKEEPING: "green",
};

const shiftLabelMap: Record<string, string> = {
  MORNING: "Mañana",
  AFTERNOON: "Tarde",
  NIGHT: "Noche",
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => <p className="font-medium">{row.original.name}</p>,
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "shift",
    header: "Turno",
    cell: ({ row }) => {
      const shift = row.original.shift;
      const text = shift ? shiftLabelMap[shift] ?? shift : "Sin turno";
      return <Tag text={text} color={shift ? "orange" : "gray"} />;
    },
  },
  {
    accessorKey: "role",
    header: "Rol",
    cell: ({ row }) => {
      const role = row.original.role;
      const text = roleLabelMap[role] ?? role;
      const color = roleColorMap[role] ?? "gray";
      return <Tag text={text} color={color} />;
    },
  },
  {
    accessorKey: "available",
    header: "Estado",
    cell: ({ row }) => (
      <Tag
        text={row.original.available ? "Disponible" : "No disponible"}
        color={row.original.available ? "green" : "gray"}
      />
    ),
  },
];
