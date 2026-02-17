import React from "react";
import RoomsTable from "./components/RoomsTable/RoomsTable";
import RoomsInfo from "./components/RoomsInfo";
import UpcomingBookingsTable from "./components/UpcomingBookingsTable";
import RoomNavbar from "./[roomId]/components/RoomNavbar/RoomNavbar";

export default function page() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <RoomNavbar />
      <RoomsInfo />
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full">
        <RoomsTable />
        <UpcomingBookingsTable />
      </div>
    </div>
  );
}
