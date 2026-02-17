"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  CheckCircle2,
  ArrowLeftRight,
  Mail,
  Printer,
} from "lucide-react";
import { TabFilter, StayState, PaymentState } from "../types";
import toast from "react-hot-toast";

interface StaysToolbarProps {
  selectedTab: TabFilter;
  onTabChange: (tab: TabFilter) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
  selectedRows: number;
}

const tabLabels: Record<TabFilter, string> = {
  all: "Todas",
  today: "Hoy",
  overdue: "Atrasadas",
  tomorrow: "Mañana",
};

function BulkActionsBar({
  selectedRows,
  onCheckout,
  onExtend,
  onReminder,
  onPrint,
}: {
  selectedRows: number;
  onCheckout: () => void;
  onExtend: () => void;
  onReminder: () => void;
  onPrint: () => void;
}) {
  if (selectedRows <= 0) return null;

  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-muted/50 p-3 sm:flex-row sm:items-center">
      <span className="text-sm text-muted-foreground">
        {selectedRows} seleccionada{selectedRows > 1 ? "s" : ""}
      </span>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={onCheckout}>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Checkout
        </Button>
        <Button variant="outline" size="sm" onClick={onExtend}>
          <ArrowLeftRight className="mr-2 h-4 w-4" />
          Extender
        </Button>
        <Button variant="outline" size="sm" onClick={onReminder}>
          <Mail className="mr-2 h-4 w-4" />
          Recordatorio
        </Button>
        <Button variant="outline" size="sm" onClick={onPrint}>
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
      </div>
    </div>
  );
}

function SearchField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      {/* <p className="text-xs font-medium text-muted-foreground">Búsqueda</p> */}
      <div className="relative">
        <Search className="absolute left-2 top-2.5 size-4.5 text-muted-foreground" />
        <Input
          placeholder="Buscar por cliente o habitación..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-lg bg-white pl-7.5 text-sm"
        />
      </div>
    </div>
  );
}

function ViewFilter({
  selectedTab,
  onTabChange,
}: {
  selectedTab: TabFilter;
  onTabChange: (tab: TabFilter) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {/* <p className="text-xs font-medium text-muted-foreground">Vista</p> */}
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
        variant="outline"
        size="sm"
        className="w-full sm:w-35 h-9 flex justify-start bg-white relative"
        >
        {/* etiqueta dinámica usando tabLabels */}
        <span className="truncate">{`Vista: ${tabLabels[selectedTab]}`}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-35">
        <DropdownMenuRadioGroup
        value={selectedTab}
        onValueChange={(v) => onTabChange(v as TabFilter)}
        >
        <DropdownMenuRadioItem value="all">Todas</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="today">Hoy</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="overdue">Atrasadas</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="tomorrow">Mañana</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function StayStateFilter({
  value,
  onChange,
}: {
  value: StayState[];
  onChange: (next: StayState[]) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {/* <p className="text-xs font-medium text-muted-foreground">Checkout</p> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-41 h-9 flex justify-start bg-white relative"
          >
            Estado de reserva
            <Filter className="size-3.5 absolute top-2.5 right-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-41">
          <DropdownMenuCheckboxItem
            checked={value.includes("on-time")}
            onCheckedChange={(checked) => {
              onChange(
                checked
                  ? [...value, "on-time"]
                  : value.filter((s) => s !== "on-time")
              );
            }}
          >
            En tiempo
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value.includes("delayed")}
            onCheckedChange={(checked) => {
              onChange(
                checked
                  ? [...value, "delayed"]
                  : value.filter((s) => s !== "delayed")
              );
            }}
          >
            Con retraso
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value.includes("extended")}
            onCheckedChange={(checked) => {
              onChange(
                checked
                  ? [...value, "extended"]
                  : value.filter((s) => s !== "extended")
              );
            }}
          >
            Extendida
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function PaymentStateFilter({
  value,
  onChange,
}: {
  value: PaymentState[];
  onChange: (next: PaymentState[]) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {/* <p className="text-xs font-medium text-muted-foreground">Pago</p> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
           <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-37 h-9 flex justify-start bg-white relative"
          >
            Estado de pago
            <Filter className="size-3.5 absolute top-2.5 right-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-37">
          <DropdownMenuCheckboxItem
            checked={value.includes("paid")}
            onCheckedChange={(checked) => {
              onChange(
                checked ? [...value, "paid"] : value.filter((s) => s !== "paid")
              );
            }}
            className="flex flex-row-reverse justify-between items-center"
          >
            <span className="flex-1 text-left">Pagado</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value.includes("partial")}
            onCheckedChange={(checked) => {
              onChange(
                checked
                  ? [...value, "partial"]
                  : value.filter((s) => s !== "partial")
              );
            }}
            className="flex flex-row-reverse justify-between items-center"
          >
            <span className="flex-1 text-left">Parcial</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value.includes("pending")}
            onCheckedChange={(checked) => {
              onChange(
                checked
                  ? [...value, "pending"]
                  : value.filter((s) => s !== "pending")
              );
            }}
            className="flex flex-row-reverse justify-between items-center"
          >
            <span className="flex-1 text-left">Pendiente</span>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function StaysToolbar({
  selectedTab,
  onTabChange,
  searchValue,
  onSearchChange,
  selectedRows,
}: StaysToolbarProps) {
  const [stayStateFilters, setStayStateFilters] = useState<StayState[]>([]);
  const [paymentStateFilters, setPaymentStateFilters] = useState<
    PaymentState[]
  >([]);

  const handleBulkCheckout = () => {
    toast.success(`Checkout masivo: ${selectedRows} estadías`);
  };

  const handleBulkExtend = () => {
    toast.success(`Extender masivo: ${selectedRows} estadías`);
  };

  const handleBulkReminder = () => {
    toast.success(`Recordatorios enviados: ${selectedRows} estadías`);
  };

  const handleBulkPrint = () => {
    toast.success(`Imprimiendo ${selectedRows} recibos`);
  };

  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-4">
      <BulkActionsBar
        selectedRows={selectedRows}
        onCheckout={handleBulkCheckout}
        onExtend={handleBulkExtend}
        onReminder={handleBulkReminder}
        onPrint={handleBulkPrint}
      />

      <div className="flex flex-col gap-2.5 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full">
          <SearchField value={searchValue} onChange={onSearchChange} />
        </div>
        <ViewFilter selectedTab={selectedTab} onTabChange={onTabChange} />
        <StayStateFilter
          value={stayStateFilters}
          onChange={setStayStateFilters}
        />
        <PaymentStateFilter
          value={paymentStateFilters}
          onChange={setPaymentStateFilters}
        />
      </div>
    </div>
  );
}
