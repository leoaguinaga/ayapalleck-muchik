import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function RoomTypeSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full sm:w-fit">
                <SelectValue placeholder="Filtrar por tipo de habitación" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Tipos</SelectLabel>
                    <SelectItem value="banana">Doble</SelectItem>
                    <SelectItem value="apple">Simple</SelectItem>
                    <SelectItem value="blueberry">Matrimonial</SelectItem>
                    <SelectItem value="grapes">King</SelectItem>
                    <SelectItem value="pineapple">Queen</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
