import { requestsData } from "./RequestsInfo.data";
import KpiCard from "@/components/KpiCard/KpiCard";

export default function RequestsInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {requestsData.map((item, index) => (
        <KpiCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          tooltip={item.tooltip}
          isPrimary={item.isPrimary}
        />
      ))}
    </div>
  );
}
