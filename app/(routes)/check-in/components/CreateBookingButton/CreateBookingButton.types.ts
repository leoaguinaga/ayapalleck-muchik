import { Dispatch, SetStateAction } from "react"

export type FormCreateBookingProps = {
    setOpenCreateBookingDialog: Dispatch<SetStateAction<boolean>>;
}