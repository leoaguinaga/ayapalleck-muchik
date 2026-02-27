import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ManagementUsersNavbar from "./components/ManagementUsersNavbar/ManagementUsersNavbar";
import UsersManagementTable from "./components/UsersManagementTable/UsersManagementTable";

export default function ManagementUsersPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <ManagementUsersNavbar />
      <UsersManagementTable />
    </div>
  );
}
