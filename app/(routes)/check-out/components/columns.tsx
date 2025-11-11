"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Stay } from "../types"
import {
  GuestCell,
  RoomCell,
  StayCell,
  PaymentCell,
  StatusCell,
  RowActions,
} from "./cells"

export const columns: ColumnDef<Stay>[] = [
  {
    id: "guest",
    header: "Cliente",
    cell: ({ row }) => (
      <GuestCell guest={row.original.guest} folio={row.original.folio} />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "room.code",
    header: "Hab.",
    cell: ({ row }) => <RoomCell room={row.original.room} />,
    enableSorting: true,
  },
  {
    id: "stay",
    header: "Estadía",
    cell: ({ row }) => (
      <StayCell
        checkIn={row.original.checkIn}
        checkOut={row.original.checkOut}
        nights={row.original.nights}
        dueDelta={row.original.dueDelta}
      />
    ),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.checkOut).getTime()
      const dateB = new Date(rowB.original.checkOut).getTime()
      return dateA - dateB
    },
  },
  {
    id: "payment",
    header: "Pago",
    cell: ({ row }) => (
      <PaymentCell total={row.original.total} paid={row.original.paid} />
    ),
    sortingFn: (rowA, rowB) => {
      const dueA = rowA.original.total - rowA.original.paid
      const dueB = rowB.original.total - rowB.original.paid
      return dueB - dueA
    },
  },
  {
    id: "status",
    header: "Estado",
    cell: ({ row }) => (
      <StatusCell
        stayState={row.original.stayState}
        paymentState={row.original.paymentState}
      />
    ),
    enableSorting: true,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <RowActions stayId={row.original.id} />,
    size: 200,
    enableHiding: false,
  },
]
