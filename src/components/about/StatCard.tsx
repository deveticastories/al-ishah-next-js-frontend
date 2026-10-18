import { UsersIcon } from "@/components/icons/Icons";

type StatCardProps = {
  value: string;
  label: string;
  variant: "highlight" | "muted";
};

export default function StatCard({ value, label, variant }: StatCardProps) {
  if (variant === "highlight") {
    return (
      <div className="flex h-[121px] items-center gap-3 rounded-sm bg-stat-red px-7 text-white">
        <span className="font-heading text-[36px] font-semibold tracking-[-0.02em]">{value}</span>
        <span className="text-[18px]">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex h-[121px] items-center gap-[22px] rounded-sm bg-stat-gray pl-10 pr-7">
      <UsersIcon className="h-10 w-[54px] shrink-0 text-stat-red" />
      <div>
        <p className="font-heading text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-black">
          {value}
        </p>
        <p className="text-[18px] leading-6 text-black">{label}</p>
      </div>
    </div>
  );
}
