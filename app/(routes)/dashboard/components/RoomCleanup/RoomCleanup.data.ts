import { RoomCleanupProps } from "./RoomCleanup.types"

export const roomCleanupData: RoomCleanupProps[] = [
    {
        room: { id: "room-101", number: "101" },
        status: "booked",
        task: "dirty",
        assignedTo: "Ana Torres",
    },
    {
        room: { id: "room-102", number: "102" },
        status: "not booked",
        task: "clean",
        assignedTo: "",
    },
    {
        room: { id: "room-201", number: "201" },
        status: "booked",
        task: "dirty",
        assignedTo: "Diego Vargas",
    },
    {
        room: { id: "room-203", number: "203" },
        status: "not booked",
        task: "dirty",
        assignedTo: "",
    },
    {
        room: { id: "room-305", number: "305" },
        status: "booked",
        task: "clean",
        assignedTo: "Claudia Ríos",
    },
    {
        room: { id: "room-410", number: "410" },
        status: "not booked",
        task: "dirty",
        assignedTo: "",
    },
    {
        room: { id: "room-502", number: "502" },
        status: "booked",
        task: "dirty",
        assignedTo: "Laura Ortiz",
    },
    {
        room: { id: "room-604", number: "604" },
        status: "not booked",
        task: "clean",
        assignedTo: "",
    },
]
