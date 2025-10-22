import { BranchItemProps } from './BranchItem.types'

export default function BranchItem(props: BranchItemProps) {
    const { name, address } = props

    return (
        <div className="flex flex-row gap-2 items-center m-1 mb-0 cursor-pointer hover:bg-gray-300/20 p-2 rounded-sm">
            <div className="rounded-lg h-8 w-8 bg-black dark:bg-white flex items-center justify-center">
                <img src="/favicon.webp" alt="" className="rounded-lg h-6 w-6 invert dark:invert-0" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold">Sede {name}</div>
                <div className="text-xs overflow-clip">{address}</div>
            </div>
        </div>
    )
}