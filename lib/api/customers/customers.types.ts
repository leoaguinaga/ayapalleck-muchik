
export interface Customer {
    id: string;
    fullName: string;
    documentType: string;
    documentNumber: string;
    ruc?: string | null;
    email?: string | null;
    phone?: string | null;
    birthDate?: string | null;
    available: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateCustomerInput {
    fullName: string;
    documentType: string;
    documentNumber: string;
    ruc?: string;
    email?: string;
    phone?: string;
    birthDate?: string;
}

export interface UpdateCustomerInput {
    fullName?: string;
    documentType?: string;
    documentNumber?: string;
    ruc?: string;
    email?: string;
    phone?: string;
    birthDate?: string;
    available?: boolean;
}
