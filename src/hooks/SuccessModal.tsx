"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  submessage?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  message = "Your add has been submitted successfully !",
  submessage = "Our team will review it, and we will keep you updated with any developments",
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[3000] p-4 font-outfit">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#FBFAF6] w-full max-w-[700px] rounded-[24px] p-12 md:p-20 flex flex-col items-center text-center shadow-2xl relative"
          >
            <div className="w-[280px] h-[180px] mb-12 relative border-[3px] border-black rounded-[12px] bg-white overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.05)]">
              <div className="h-8 border-b-[3px] border-black flex items-center px-3 gap-1.5 bg-white">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>

              <div className="flex-1 h-full flex flex-col items-center justify-center p-4">
                <div className="w-20 h-20 rounded-full border-[3px] border-[#97C680] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[#97C680]/10 rounded-full"></div>
                  <svg
                    className="w-10 h-10 text-[#97C680] relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="mt-4 w-12 h-1.5 bg-gray-200 rounded-full"></div>
                <div className="mt-1 w-8 h-1 bg-gray-100 rounded-full"></div>
              </div>
            </div>

            <h2 className="text-[28px] md:text-[32px] font-medium mb-4 text-black tracking-tight leading-tight">
              {message}
            </h2>
            <p className="text-[15px] md:text-[16px] text-gray-500 font-normal max-w-[500px] leading-relaxed">
              {submessage}
            </p>

            <button
              onClick={onClose}
              className="mt-12 w-full max-w-[240px] h-14 bg-[#F2D361] hover:brightness-95 text-gray-800 rounded-[12px] font-bold text-[18px] transition-all active:scale-95 shadow-md"
            >
              Finish
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
