import { Cleaner } from "./CleanerSelector.types";

export async function fetchCleaners(): Promise<Cleaner[]> {
    return Promise.resolve([
        { id: "1", name: "María Pérez", available: true },
        { id: "2", name: "Carlos López", available: true },
        { id: "3", name: "Ana Gómez", available: false },
    ]);
}