"use client";

import Image from "next/image";
import { EnquiryM } from "@/types/enquiries";

interface EnquiryModalProps {
  enquiry: EnquiryM;
  onClose: () => void;
  onOpenRating: () => void;
  onSubmitRfq: () => void;
}

export default function EnquiryModal({
  enquiry,
  onClose,
  onOpenRating,
  onSubmitRfq,
}: EnquiryModalProps) {
  // Organized into pairs to match the "Table" look in the screenshots
  const details = [
    {
      leftLabel: "Ad_status",
      leftVal: enquiry.adStatus || "Active",
      rightLabel: "purpose",
      rightVal: enquiry.purpose || "The Purpose of The ad",
    },
    {
      leftLabel: "start_date",
      leftVal: enquiry.startDate || "2024-03-01",
      rightLabel: "qualification",
      rightVal: enquiry.qualification || "QUALIFICATION",
    },
    {
      leftLabel: "standard",
      leftVal: enquiry.standard || "STANDARD",
      rightLabel: "expiry date",
      rightVal: enquiry.expiryDate || "2024-11-13",
    },
    {
      leftLabel: "description",
      leftVal: enquiry.description || "This Ad Description",
      rightLabel: "",
      rightVal: "",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[2000] p-4 font-outfit">
      <div className="bg-[#EEF0F2] w-full max-w-[950px] rounded-[24px] p-8 md:p-12 relative animate-in fade-in zoom-in duration-300 shadow-2xl overflow-hidden">
        {/* Close Button - Matches the black square style */}
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
          {/* Left Column: Info Table */}
          <div className="flex flex-col">
            <h2 className="text-[48px] font-medium mb-8 text-black tracking-tight leading-tight">
              {enquiry.title || "Machine for sale"}
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
                  <div className="p-3 bg-transparent font-bold text-black border-r border-gray-300 truncate">
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

          {/* Right Column: Image & Actions */}
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

              {/* Navigation Arrows */}
              <button className="absolute left-[-30px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="absolute right-[-30px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>

            <div className="w-full max-w-[280px] space-y-3">
              <button
                onClick={onOpenRating}
                className="w-full h-10 bg-[#F2D361] rounded-[8px] flex items-center justify-between px-4 font-semibold text-[14px] text-gray-700 shadow-sm hover:brightness-95 transition-all"
              >
                <span>Seller rating</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>

              <button
                onClick={onSubmitRfq}
                className="w-full h-14 bg-[#F2D361] rounded-[8px] font-bold text-[18px] text-gray-800 shadow-md hover:brightness-95 transition-all active:scale-[0.98]"
              >
                Submit your RFQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
