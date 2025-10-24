import { columns } from "./columns";
import DataTable from "./data-table";
import { usersData } from "./UsersTable.data";

export default function UsersTable() {
  return (
    <DataTable data={usersData} columns={columns} />
  )
}
