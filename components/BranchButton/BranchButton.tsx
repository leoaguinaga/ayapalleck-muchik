import React from "react";
import { BranchButtonProps } from "./BranchButton.types";
import { ChevronsUpDown, GalleryVerticalEnd, Hotel } from "lucide-react";

export default function BranchButton(props: BranchButtonProps) {
  const { name, address, isOpen } = props;

  return (
    <article
      className={`flex flex-row items-center justify-between cursor-pointer hover:bg-muted p-2 rounded-lg text-left ${
        isOpen ? "bg-muted" : ""
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        <GalleryVerticalEnd className="text-white rounded-lg size-8 p-1.5 bg-black" />
        <div className="flex flex-col leading-tight text-sm">
          <p className="font-semibold">Sede {name}</p>
          <p className="text-xs text-muted-foreground font-medium">{address}</p>
        </div>
      </div>
      <ChevronsUpDown className="size-4.5" strokeWidth={1.5} />
    </article>
  );
}
