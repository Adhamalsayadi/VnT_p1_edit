"use client";
import EnquiriesCard from "@/components/enquiries/enquiriesCard";
import LeftCard from "@/components/enquiries/leftCard";
import RightCard from "@/components/enquiries/rightCard";
import { FreeEnquiry, AnyEnquiry } from "@/types/enquiries";

interface Props {
  enquiries: AnyEnquiry[];
}

export default function Mainlayout({ enquiries }: Props) {
  const paid = enquiries.filter((e) => e.type === "paid");
  const free = enquiries.filter((e) => e.type === "free");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr_150px] gap-6 p-4 md:p-5 w-full items-start overflow-hidden">
      <div className="hidden lg:block">
        <LeftCard enquiries={free.slice(0, 4)} />
      </div>

      <div className="w-full">
        <EnquiriesCard enquiries={paid} />
      </div>

      <div className="lg:block">
        <RightCard enquiries={free.slice(4, 8)} />
      </div>
    </div>
  );
}
