import UsersInfo from "./components/UsersInfo";
import UsersTable from "./components/UsersTable";
import UsersOnShiftTable from "./components/UsersOnShiftTable";
import ActualShiftTag from "./components/ActualShiftTag";

export default function UsersPage() {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <UsersInfo />
      <div className='grid grid-cols-1 xl:grid-cols-5 gap-5 w-full h-full'>
        <div className='w-full h-full col-span-3'>
          <UsersTable />
        </div>
        <div className='border rounded-lg p-5 min-h-full bg-card col-span-2 flex flex-col gap-2.5'>
            <ActualShiftTag />
            <UsersOnShiftTable />
        </div>
      </div>
    </div>
  )
}
