import React, { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { fetchCleaners } from "./CleanerSelector.data";
import { Cleaner } from "./CleanerSelector.types";

type CleanerSelectorProps = {
  value?: string;
  onChange: (name: string) => void;
  className?: string;
  placeholder?: string;
};

export default function CleanerSelector({
  value,
  onChange,
  className,
  placeholder = "Seleccionar limpiador",
}: CleanerSelectorProps) {
  const [cleaners, setCleaners] = useState<Cleaner[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchCleaners()
      .then((data) => {
        if (mounted) setCleaners(data);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Select
      value={value ?? "unassigned"}
      onValueChange={(val) => onChange(val === "unassigned" ? "" : val)}
    >
      <SelectTrigger size="sm" className={className ?? "w-55"}>
        <SelectValue placeholder={loading ? "Cargando..." : placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="unassigned">Sin asignar</SelectItem>
        {cleaners.map((c) => (
          <SelectItem key={c.name} value={c.name} disabled={!c.available}>
            {c.name}
            {!c.available ? " (No disponible)" : ""}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
