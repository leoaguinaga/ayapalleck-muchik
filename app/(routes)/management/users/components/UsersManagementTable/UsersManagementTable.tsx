"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useUsers } from "@/hooks/users";
import DataTable from "./data-table";
import { columns } from "./columns";
import { usersFallbackData } from "./UsersManagementTable.data";
import { User } from "@/lib/api/users";

export default function UsersManagementTable() {
  const { data, isLoading, isError } = useUsers();

  const users: User[] = Array.isArray(data) ? data : usersFallbackData;

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-destructive">
        Error al cargar usuarios
      </div>
    );
  }

  return <DataTable columns={columns} data={users} />;
}
