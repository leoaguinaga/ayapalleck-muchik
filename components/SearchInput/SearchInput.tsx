import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function SearchInput() {
  return (
    <div className="md:ml-2 relative">
      <Input
        placeholder="Busca una habitación, huesped o reserva..."
        className="rounded-l-lg h-9 border-0 bg-gray-100 font-medium max-md:hidden md:text-foreground md:pl-7.5 lg:mr-17 w-8 md:w-82 hover:ring-0 focus:ring-0 focus-visible:ring-0 disabled:ring-0 transition-all duration-300"
      />
      <Search className="max-md:size-9 size-4 max-md:p-2 p-0 max-md:-top-4 top-2.5 max-md:left-0.5 left-2 rounded-full bg-gray-100 absolute text-muted-foreground" />
      <KbdGroup className="absolute top-0 right-2 max-lg:hidden h-9.25 rounded-r-lg bg-gray-100 px-2">
        <Kbd className="bg-white">Ctrl</Kbd>
        <Kbd className="bg-white">K</Kbd>
      </KbdGroup>
    </div>
  );
}
