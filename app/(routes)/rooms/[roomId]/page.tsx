import DangerZone from "./components/DangerZone";
import RecentActivity from "./components/RecentActivity";
import RoomBookings from "./components/RoomBookings/RoomBookings";
import RoomDetails from "./components/RoomDetails";
import RoomInfo from "./components/RoomInfo/RoomInfo";

export default async function RoomNumberPage({ params }: { params: { roomId: string } }) {
  const { roomId } = await params;

  const room = {
    roomNumber: roomId,
    roomType: "Matrimonial",
    pricePerNight: 100
  }

  return (
    <div className="flex flex-col gap-5">
      <RoomInfo />
      <div className="w-full flex flex-col 2xl:flex-row gap-5">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <RoomDetails {...room} />
          <RecentActivity />
        </div>
        <RoomBookings />
      </div>
      <DangerZone roomNumber={roomId} />
    </div>
  )
}