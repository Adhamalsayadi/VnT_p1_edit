"use client";

import { useState } from "react";
import { AnyEnquiry } from "@/types/enquiries";
import EnquiryModal from "@/hooks/EnquiryModal";
import SellerRatingModal from "@/hooks/SellerRatingModal";
import SuccessModal from "@/hooks/SuccessModal";

type ModalType = "enquiry" | "rating" | "success" | null;

interface UseModalFlowReturn {
  activeModal: ModalType;
  selectedEnquiry: AnyEnquiry | null;
  openEnquiry: (enquiry: AnyEnquiry) => void;
  closeAll: () => void;
  renderModals: () => React.ReactNode;
}

export function useModalFlow(): UseModalFlowReturn {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState<AnyEnquiry | null>(
    null
  );

  const openEnquiry = (enquiry: AnyEnquiry) => {
    setSelectedEnquiry(enquiry);
    setActiveModal("enquiry");
  };

  const closeAll = () => {
    setActiveModal(null);
    setSelectedEnquiry(null);
  };

  const renderModals = () => (
    <>
      {activeModal === "enquiry" && selectedEnquiry && (
        <EnquiryModal
          enquiry={selectedEnquiry}
          onClose={closeAll}
          onOpenRating={() => setActiveModal("rating")}
          onSubmitRfq={() => setActiveModal("success")}
        />
      )}

      <SellerRatingModal
        isOpen={activeModal === "rating"}
        onClose={() => setActiveModal("enquiry")}
      />

      <SuccessModal isOpen={activeModal === "success"} onClose={closeAll} />
    </>
  );

  return { activeModal, selectedEnquiry, openEnquiry, closeAll, renderModals };
}
