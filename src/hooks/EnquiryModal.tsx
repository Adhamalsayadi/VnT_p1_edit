"use client";
import { submitAction } from "@/actions/actionbutton";
import Image from "next/image";
import { AnyEnquiry } from "@/types/enquiries";

interface EnquiryModalProps {
  enquiry: AnyEnquiry;
  onClose: () => void;
  onOpenRating: () => void;
  onSubmitRfq: () => void;
}

export default function EnquiryModal({
  enquiry,
  onClose,
  onOpenRating,
}: EnquiryModalProps) {
  const details = [
    {
      leftLabel: "Category",
      leftVal: enquiry.category,
      rightLabel: "Sub Category",
      rightVal: enquiry.subCategory,
    },
    {
      leftLabel: "Posted Time",
      leftVal: enquiry.time,
      rightLabel: "Type",
      rightVal: enquiry.type,
    },
    {
      leftLabel: "Client Rate",
      leftVal: `${enquiry.clientRate}`,
      rightLabel: "VT Rate",
      rightVal: `${enquiry.vtRate}`,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[2000] p-4 font-outfit">
      <div className="bg-[#EEF0F2] w-full max-w-[950px] rounded-[24px] p-8 md:p-12 relative animate-in fade-in zoom-in duration-300 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-6 left-6 bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all z-20 active:scale-90"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="flex flex-col">
            <h2 className="text-[32px] md:text-[48px] font-medium mb-8 text-black tracking-tight leading-tight">
              {enquiry.title}
            </h2>

            <div className="bg-[#D9D9D9]/50 rounded-[12px] overflow-hidden border border-gray-300">
              {details.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 border-b border-gray-300 last:border-none text-[13px]"
                >
                  <div className="bg-gray-200/50 p-3 font-semibold text-gray-600 border-r border-gray-300 capitalize">
                    {row.leftLabel}
                  </div>
                  <div className="p-3 bg-white/30 font-bold text-black truncate border-r border-gray-300">
                    {row.leftVal}
                  </div>
                  <div className="bg-gray-200/50 p-3 font-semibold text-gray-600 border-r border-gray-300 capitalize">
                    {row.rightLabel}
                  </div>
                  <div className="p-3 bg-transparent font-bold text-black truncate">
                    {row.rightVal}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative group mb-8">
              <div className="w-[260px] h-[260px] rounded-full overflow-hidden border-[6px] border-[#EEF0F2] shadow-xl relative ring-1 ring-gray-200">
                <Image
                  src={enquiry.image || "/placeholder.jpg"}
                  alt={enquiry.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full max-w-[280px] space-y-3">
              <button
                onClick={onOpenRating}
                className="w-full h-10 bg-[#F2D361] rounded-[8px] flex items-center justify-between px-4 font-semibold text-[14px] text-gray-700 shadow-sm hover:brightness-95 transition-all"
              >
                <span>Seller rating</span>
                <span className="text-black font-bold">{enquiry.vtRate}</span>
              </button>
              <form action={submitAction}>
                <button className="w-full h-14 bg-[#F2D361] rounded-[8px] font-bold text-[18px] text-gray-800 shadow-md hover:brightness-95 transition-all active:scale-[0.98]">
                  Submit your RFQ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
