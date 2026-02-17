"use client";

import { useState, useMemo } from "react";
import { Request, RequestStatus, RequestStatusColumn } from "./types";
import { Room } from "./room-types";
import { mockRequests } from "./data";
import { KanbanColumn } from "@/components/KanbanColumn";
import { RequestDetailsModal } from "@/components/RequestDetailsModal";
import { RoomAvailabilityModal } from "@/components/RoomAvailabilityModal";
import RequestNavbar from "./components/Navbar/RequestNavbar";

export default function RequestsPage() {
  const [requests, setRequests] = useState<Request[]>(mockRequests);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [collapsedColumns, setCollapsedColumns] = useState<Set<RequestStatus>>(
    new Set()
  );

  const statusColumns: { id: RequestStatus; title: string }[] = [
    { id: "in-review", title: "En revisión" },
    { id: "approved", title: "Aprobada" },
    { id: "confirmed", title: "Confirmadas" },
    { id: "rejected", title: "Rechazadas" },
    { id: "expired", title: "Expiradas" },
    { id: "cancelled", title: "Canceladas" },
  ];

  const columns: RequestStatusColumn[] = useMemo(() => {
    return statusColumns.map((status) => {
      const statusRequests = requests.filter((req) => req.status === status.id);
      return {
        id: status.id,
        title: status.title,
        count: statusRequests.length,
        requests: statusRequests,
      };
    });
  }, [requests]);

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);

    if (request.status === "in-review") {
      setIsAvailabilityModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleToggleCollapse = (columnId: RequestStatus) => {
    setCollapsedColumns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(columnId)) {
        newSet.delete(columnId);
      } else {
        newSet.add(columnId);
      }
      return newSet;
    });
  };

  const handleCollapseAll = () => {
    setCollapsedColumns(new Set(statusColumns.map((s) => s.id)));
  };

  const handleExpandAll = () => {
    setCollapsedColumns(new Set());
  };

  const handleApprove = (request: Request) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === request.id
          ? { ...req, status: "approved" as RequestStatus }
          : req
      )
    );
  };

  const handleReject = (request: Request) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === request.id
          ? { ...req, status: "rejected" as RequestStatus }
          : req
      )
    );
  };

  const handleConfirm = (request: Request) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === request.id
          ? { ...req, status: "confirmed" as RequestStatus }
          : req
      )
    );
  };

  const handleCancel = (request: Request) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === request.id
          ? { ...req, status: "cancelled" as RequestStatus }
          : req
      )
    );
  };

  const handleAssignRoom = (request: Request, room: Room) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === request.id
          ? { ...req, status: "approved" as RequestStatus }
          : req
      )
    );
  };

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <RequestNavbar onExpandAll={handleExpandAll} onCollapseAll={handleCollapseAll} />

      <div className="flex-1 min-h-0">
        <div className="h-full overflow-x-auto overflow-y-hidden p-4 bg-white rounded-xl">
          <div className="inline-flex gap-4 h-full pb-4">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                title={column.title}
                requests={column.requests}
                isCollapsed={collapsedColumns.has(column.id)}
                onToggleCollapse={() => handleToggleCollapse(column.id)}
                onRequestClick={handleRequestClick}
                status={column.id}
              />
            ))}
          </div>
        </div>
      </div>

      <RequestDetailsModal
        request={selectedRequest}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedRequest(null);
        }}
        onApprove={handleApprove}
        onReject={handleReject}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <RoomAvailabilityModal
        request={selectedRequest}
        isOpen={isAvailabilityModalOpen}
        onClose={() => {
          setIsAvailabilityModalOpen(false);
          setSelectedRequest(null);
        }}
        onAssignRoom={handleAssignRoom}
        onReject={handleReject}
      />
    </div>
  );
}
