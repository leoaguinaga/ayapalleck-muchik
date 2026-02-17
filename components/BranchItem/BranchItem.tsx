import { Hotel } from "lucide-react";
import { BranchItemProps } from "./BranchItem.types";

export default function BranchItem(props: BranchItemProps) {
  const { name, address } = props;

  return (
    <article className="flex flex-row items-center justify-between cursor-pointer hover:bg-gray-100 p-0.75 rounded-md">
      <div className="flex flex-row items-center gap-2">
        <Hotel className="size-8 rounded-lg bg-black p-1.5 text-white" strokeWidth={1.5}/>
        <div className="flex flex-col leading-tight text-sm">
          <p className="font-semibold">Sede {name}</p>
          <p className="text-xs text-gray-500 overflow-hidden font-medium text-ellipsis whitespace-nowrap w-41">
            {address}
          </p>
        </div>
      </div>
    </article>
  );
}
