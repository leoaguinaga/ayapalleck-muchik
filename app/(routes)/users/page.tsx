import Tag from "@/components/Tag/Tag";
import UsersInfo from "./components/UsersInfo";
import UsersTable from "./components/UsersTable";
import UsersOnShiftTable from "./components/UsersOnShiftTable";

export default function UsersPage() {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <UsersInfo />
      <div className='grid grid-cols-1 xl:grid-cols-5 gap-5 w-full h-full'>
        <div className='w-full h-full col-span-3'>
          <UsersTable />
        </div>
        <div className='border rounded-lg p-5 min-h-full bg-card col-span-2 flex flex-col gap-2.5'>
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg font-semibold">Trabajadores en turno</h2>
              <Tag color="orange" text="Tarde" />
            </div>
            <UsersOnShiftTable />
        </div>
      </div>
    </div>
  )
}
