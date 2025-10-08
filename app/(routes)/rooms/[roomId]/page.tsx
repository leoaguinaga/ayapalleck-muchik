import DangerZone from "./components/DangerZone";
import RecentActivity from "./components/RecentActivity";
import RoomBookings from "./components/RoomBookings/RoomBookings";
import RoomDetails from "./components/RoomDetails";
import RoomInfo from "./components/RoomInfo/RoomInfo";

export default function RoomNumberPage({ params }: { params: { roomId: string } }) {
  const { roomId } = params;

  const room = {
    roomNumber: roomId,
    roomType: "Simple",
    pricePerNight: 100
  }

  return (
    <div className="flex flex-col gap-5">
      <RoomInfo />
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <RoomDetails {...room} />
        <RecentActivity />
        <RoomBookings />
      </div>
      <DangerZone roomNumber={roomId}/>
    </div>
  )
}