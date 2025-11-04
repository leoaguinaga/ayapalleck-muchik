import { ReactNode } from 'react';

export type ButtonVariant = 'default' | 'icon' | 'text' | 'underline';

export interface CustomOpenModalButtonProps {
  // Trigger Button Props
  triggerLabel?: string;
  triggerIcon?: ReactNode;
  buttonVariant?: ButtonVariant;
  buttonClassName?: string;
  
  // Modal Props
  title: string;
  description?: string;
  breadcrumb?: string[];
  children: ReactNode; // Form content
  
  // State Props
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  
  // Modal Props
  modalClassName?: string;
}
