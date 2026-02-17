export type CheckInFiltersProps = {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    roomTypeFilter: string;
    onRoomTypeChange: (value: string) => void;
    occupancyFilter: string;
    onOccupancyChange: (value: string) => void;
    cleanlinessFilter: string;
    onCleanlinessChange: (value: string) => void;
}
