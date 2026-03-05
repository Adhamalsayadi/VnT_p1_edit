"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SellerRatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellerRatingModal({
  isOpen,
  onClose,
}: SellerRatingModalProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[4000] p-4 font-outfit">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            /* Reduced max-width from 900px to 760px and padding from p-14 to p-8 */
            className="bg-[#EEF0F2] w-full max-w-[760px] rounded-[20px] p-6 md:p-10 shadow-2xl relative"
          >
            {/* Header - Shrunk text and icon */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-[32px] font-medium text-black tracking-tight leading-none">
                Seller rating
              </h2>
            </div>

            {/* Back Arrow - Adjusted size and position */}
            <button
              onClick={onClose}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
            >
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              {/* Left Side */}
              <div className="flex flex-col">
                {leftCriteria.map((item) => (
                  <div
                    key={item.id}
                    className="py-1.5 border-b border-gray-300 flex flex-col"
                  >
                    <span className="text-[13px] font-bold text-black">
                      {item.id}. {item.label}
                    </span>
                    {item.val && (
                      <span className="text-[11px] text-gray-500 font-medium whitespace-pre-wrap">
                        {item.val}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side */}
              <div className="flex flex-col">
                {ratedCriteria.map((label, idx) => (
                  <div
                    key={idx}
                    className="py-1.5 border-b border-gray-300 flex items-center gap-3 h-[42px]"
                  >
                    <span className="text-[11px] font-medium text-black w-36 leading-tight">
                      {idx + 7}. {label}
                    </span>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white rounded-full overflow-hidden border border-gray-200">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          className="h-full bg-[#F2D361]"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 min-w-[20px]">
                        0-5
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
