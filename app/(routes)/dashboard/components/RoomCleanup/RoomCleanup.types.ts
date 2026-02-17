export type RoomCleanupProps = {
    room: {
        id: string;
        number: string;
    },
    status: "booked" | "not booked",
    task: "clean" | "dirty",
    assignedTo: string;
}