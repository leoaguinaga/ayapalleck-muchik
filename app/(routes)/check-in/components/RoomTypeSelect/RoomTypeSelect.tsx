"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RoomTypeSelectProps } from "./RoomTypeSelect.types"

export default function RoomTypeSelect({ onValueChange, value }: RoomTypeSelectProps) {
    return (
        <Select onValueChange={onValueChange} value={value}>
            <SelectTrigger className="w-full sm:w-[240px]">
                <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Tipos de Habitación</SelectLabel>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="Matrimonial">Matrimonial</SelectItem>
                    <SelectItem value="Simple">Simple</SelectItem>
                    <SelectItem value="Doble">Doble</SelectItem>
                    <SelectItem value="King">King</SelectItem>
                    <SelectItem value="Queen">Queen</SelectItem>
                    <SelectItem value="Suite">Suite</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
