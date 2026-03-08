"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { submitAction } from "@/actions/actionbutton";
import { AnyEnquiry } from "@/types/enquiries";

type ModalType = "enquiry" | "rating" | "success";

interface GlobalModalProps {
  type: ModalType;
  isOpen: boolean;
  onClose: () => void;

  /* enquiry props */
  enquiry?: AnyEnquiry;
  onOpenRating?: () => void;

  /* success props */
  message?: string;
  submessage?: string;
}

export default function GlobalModal({
  type,
  isOpen,
  onClose,
  enquiry,
  onOpenRating,
  message = "Your add has been submitted successfully !",
  submessage = "Our team will review it, and we will keep you updated with any developments",
}: GlobalModalProps) {
  if (!isOpen) return null;

  /* -------------------- SELLER RATING DATA -------------------- */

  const leftCriteria = [
    { id: 1, label: "Evaluation category", val: "Mandatory" },
    { id: 2, label: "Premises size", val: "300-1000  1001-5000" },
    { id: 3, label: "Insurance", val: "20K-500K  500K-3M" },
    { id: 4, label: "Accreditations", val: "ISO   PMI   LEEA" },
    { id: 5, label: "Financial capability", val: "" },
    { id: 6, label: "Vendor with major clients", val: "" },
  ];

  const ratedCriteria = [
    "Personnel and qualification",
    "Manpower availability",
    "Personnel Development",
    "Localization",
    "Quality",
    "Safety",
    "Environmental",
    "Manufacturing and process",
    "Supply chain Management",
    "Material control",
    "Customer satisfactory program",
  ];

  /* -------------------- ENQUIRY DATA -------------------- */

  const details = enquiry
    ? [
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
      ]
    : [];

  /* -------------------- UI -------------------- */

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[4000] p-4 font-outfit">
        {/* -------------------- SUCCESS MODAL -------------------- */}

        {type === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#FBFAF6] w-full max-w-[700px] rounded-[24px] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl relative"
          >
            <h2 className="text-[32px] font-medium mb-4 text-black">
              {message}
            </h2>

            <p className="text-gray-500 max-w-[500px]">{submessage}</p>

            <button
              onClick={onClose}
              className="mt-12 w-full max-w-[240px] h-14 bg-[#F2D361] rounded-[12px] font-bold text-[18px]"
            >
              Finish
            </button>
          </motion.div>
        )}

        {/* -------------------- SELLER RATING MODAL -------------------- */}

        {type === "rating" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#EEF0F2] w-full max-w-[760px] rounded-[20px] p-10 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            >
              ←
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                {leftCriteria.map((item) => (
                  <div key={item.id} className="border-b py-2">
                    <span className="font-bold">
                      {item.id}. {item.label}
                    </span>
                    {item.val && (
                      <p className="text-gray-500 text-xs">{item.val}</p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                {ratedCriteria.map((label, idx) => (
                  <div key={idx} className="border-b py-2">
                    <span className="text-sm">
                      {idx + 7}. {label}
                    </span>
                    <div className="h-2 bg-white mt-1 rounded">
                      <div className="h-2 bg-[#F2D361] w-[75%]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* -------------------- ENQUIRY MODAL -------------------- */}

        {type === "enquiry" && enquiry && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#EEF0F2] w-full max-w-[950px] rounded-[24px] p-12 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-6 left-6 bg-black text-white w-10 h-10 rounded-lg"
            >
              X
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
              <div>
                <h2 className="text-[48px] font-medium mb-8">
                  {enquiry.title || "Machine for sale"}
                </h2>

                <div className="bg-[#D9D9D9]/50 rounded-[12px] overflow-hidden border">
                  {details.map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 border-b text-[13px]"
                    >
                      <div className="bg-gray-200 p-3 font-semibold">
                        {row.leftLabel}
                      </div>

                      <div className="p-3 font-bold">{row.leftVal}</div>

                      <div className="bg-gray-200 p-3 font-semibold">
                        {row.rightLabel}
                      </div>

                      <div className="p-3 font-bold">{row.rightVal}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[260px] h-[260px] rounded-full overflow-hidden relative">
                  <Image
                    src={enquiry.image || "/placeholder.jpg"}
                    alt={enquiry.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full max-w-[280px] mt-8 space-y-3">
                  <button
                    onClick={onOpenRating}
                    className="w-full h-10 bg-[#F2D361] rounded-[8px]"
                  >
                    Seller rating
                  </button>

                  <form action={submitAction}>
                    <button className="w-full h-14 bg-[#F2D361] rounded-[8px] font-bold text-[18px]">
                      Submit your RFQ
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
