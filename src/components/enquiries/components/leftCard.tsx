"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Enquiry, EnquiryM } from "@/types/enquiries";
import EnquiryModal from "@/components/ui/EnquiryModal";
import SellerRatingModal from "@/components/ui/SellerRatingModal";
import SuccessModal from "@/components/ui/SuccessModal";

interface Props {
  enquiries?: Enquiry[];
}

export default function LeftCard({ enquiries = [] }: Props) {
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const cardSmClasses =
    "w-[150px] h-[174px] bg-bg-blue flex flex-col rounded-lg items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg";

  const btnClasses =
    "w-[70px] h-[18px] bg-primary text-black border-none rounded-[3px] text-[7px] font-medium hover:bg-[#f0ca2a]";

  if (enquiries.length === 0) {
    return (
      <p role="status" className="text-sm text-text-muted">
        No results found.
      </p>
    );
  }

  const handleOpenEnquiry = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseAll = () => {
    setIsEnquiryModalOpen(false);
    setIsRatingModalOpen(false);
    setIsSuccessModalOpen(false);
    setSelectedEnquiry(null);
  };

  return (
    <div className="grid grid-cols-1 gap-5 justify-items-center">
      {enquiries.map((item) => (
        <div key={item.id} className={cardSmClasses}>
          <h4 className="text-[12px] font-semibold text-dark text-center">
            {item.title}
          </h4>

          <p className="text-[10px] text-[#717171] leading-tight text-center">
            {item.category}
          </p>

          <Image
            src={item.image}
            alt={item.title}
            width={68}
            height={68}
            className="rounded-full object-cover"
          />

          <button 
            onClick={() => handleOpenEnquiry(item)}
            className={btnClasses}
          >
            Submit RFQ
          </button>
        </div>
      ))}

      {/* Modals */}
      {isEnquiryModalOpen && selectedEnquiry && (
        <EnquiryModal
          enquiry={selectedEnquiry as EnquiryM}
          onClose={() => setIsEnquiryModalOpen(false)}
          onOpenRating={() => {
            setIsEnquiryModalOpen(false);
            setIsRatingModalOpen(true);
          }}
          onSubmitRfq={() => {
            setIsEnquiryModalOpen(false);
            setIsSuccessModalOpen(true);
          }}
        />
      )}

      <SellerRatingModal 
        isOpen={isRatingModalOpen} 
        onClose={() => {
          setIsRatingModalOpen(false);
          setIsEnquiryModalOpen(true);
        }} 
      />

      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={handleCloseAll}
      />
    </div>
  );
}
