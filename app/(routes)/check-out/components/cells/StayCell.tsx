import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { formatDueDelta } from "../../utils";
import { cn } from "@/lib/utils";

interface StayCellProps {
  checkIn: Date;
  checkOut: Date;
  nights: number;
  dueDelta?: number;
}

export function StayCell({
  checkIn,
  checkOut,
  nights,
  dueDelta,
}: StayCellProps) {
  const isLate = checkOut < new Date();

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">
          {checkIn.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          })}{" → "}
          <span className={`"" ${isLate ? "text-red-500" : ""}`}>
            {checkOut.toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
        {/* <Badge variant="outline" className="text-xs font-normal">
          {nights} {nights === 1 ? 'noche' : 'noches'}
        </Badge> */}
      </div>
      {/* {dueInfo && (
        <Badge
          variant="outline"
          className={cn("text-xs font-normal w-fit", dueInfo.className)}
        >
          {dueInfo.text}
        </Badge>
      )} */}
    </div>
  );
}
