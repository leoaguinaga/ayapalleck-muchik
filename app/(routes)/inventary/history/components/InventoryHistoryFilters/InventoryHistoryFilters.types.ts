export interface InventoryHistoryFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  movementType: string;
  onMovementTypeChange: (value: string) => void;
}
