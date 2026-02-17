export type CustomerTableProps = {
    customer: string,
    room: {
        number: string
        type: string
    },
    checkIn: string,
    checkOut: string,
    amount: number
}