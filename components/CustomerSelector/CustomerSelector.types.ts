export interface Customer {
  id: string;
  name: string;
  document: string;
}

export interface CustomerSelectorProps {
  value: string;
  onChange: (value: string) => void;
  customers: Customer[];
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
}
