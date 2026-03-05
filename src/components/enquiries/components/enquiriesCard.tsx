"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Enquiry, EnquiryM } from "@/types/enquiries";
import Button from "@/components/ui/button";
import SurfaceCard from "@/components/ui/surface-card";
import EnquiryModal from "@/components/ui/EnquiryModal";
import SellerRatingModal from "@/components/ui/SellerRatingModal";
import SuccessModal from "@/components/ui/SuccessModal";

interface Props {
  enquiries?: Enquiry[];
}

export default function EnquiriesCard({ enquiries = [] }: Props) {
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  if (enquiries.length === 0) {
    return (
      <p role="status" className="p-5 font-medium text-text-muted">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {enquiries.slice(0, 6).map((item) => (
        <SurfaceCard
          key={item.id}
          className="bg-[#f5f5f5] w-[316.03px] flex flex-col items-center justify-center rounded-custom p-[20px_20px] text-center"
        >
          <h2 className="font-semibold text-[22px] text-dark mb-">
            {item.title}
          </h2>

          <div className="flex relative p-2.5 mt-[-20px]">
            <p className="my-3 text-[#717171] leading-relaxed text-sm">
              {item.category}
            </p>
            <span className="w-px h-[103px] bg-[#8498bc] rounded-[2px] absolute top-[2%] left-1/2 -translate-x-1/2 rotate-90 scale-x-300"></span>
          </div>

          <Image
            src={item.image}
            alt={item.title}
            width={199}
            height={185}
            sizes="(max-width: 768px) 180px, 199px"
            className="rounded-full my-1.25 object-cover"
          />

          <Button 
            onClick={() => handleOpenEnquiry(item)}
            className="w-[197px] mt-3 capitalize"
          >
            Submit your price
          </Button>
        </SurfaceCard>
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
          setIsEnquiryModalOpen(true); // Go back to enquiry modal
        }} 
      />

      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={handleCloseAll}
      />
    </div>
  );
}
