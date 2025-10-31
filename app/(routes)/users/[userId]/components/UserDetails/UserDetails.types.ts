export interface UserDetailsProps {
    userId: string
    name: string
    email: string
    role: string
    phone: string
    documentNumber: string
    hireDate: Date
    status: "Activo" | "Inactivo"
}
