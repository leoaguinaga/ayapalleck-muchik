import CreateRoomTypeButton from "@/components/CreateRoomTypeButton";
import Link from "next/link";

export default function RequestNavbar() {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between w-full p-4 rounded-xl bg-white">
      <div className="p-0.75 rounded-lg items-center flex gap-1 bg-gray-200/80 w-fit text-sm font-medium">
        <Link
          href="/management"
          className="px-2 py-1 bg-white rounded-md shadow-sm"
        >
          Tipos de habitaciones
        </Link>
        <Link href="/management/users" className="px-2 py-1 rounded-md">
          Usuarios
        </Link>
      </div>
      <CreateRoomTypeButton />
    </div>
  );
}
