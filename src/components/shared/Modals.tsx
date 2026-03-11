"use client";

import { X, AlertTriangle } from "lucide-react";
import Button from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl border border-[#EAECF0] overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-5 border-b border-[#F2F4F7] flex justify-between items-center bg-[#F9FAFB]/50">
          <h3 className="font-bold text-[#101828]">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-xl transition-colors text-[#667085]">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message,
  confirmText = "Delete",
  variant = "danger"
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  variant?: "danger" | "primary";
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center text-center">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${variant === 'danger' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-primary'}`}>
          <AlertTriangle size={30} />
        </div>
        <p className="text-[#475467] mb-8 leading-relaxed">
          {message}
        </p>
        <div className="flex gap-3 w-full">
          <Button variant="ghost" className="flex-1" onClick={onClose}>Cancel</Button>
          <Button 
            className={`flex-1 ${variant === 'danger' ? 'bg-red-600 hover:bg-red-700 text-white border-none' : ''}`}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export const EditEnquiryModal = ({
  isOpen,
  onClose,
  enquiry,
  onSave
}: {
  isOpen: boolean;
  onClose: () => void;
  enquiry: any;
  onSave: (data: any) => void;
}) => {
  if (!enquiry) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Enquiry">
        <form className="space-y-5" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            onSave(data);
            onClose();
        }}>
           <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#344054] uppercase tracking-wider">Enquiry Title</label>
              <input 
                name="title"
                defaultValue={enquiry.title}
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
           </div>
           <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#344054] uppercase tracking-wider">Quantity</label>
                  <input 
                    name="quantity"
                    type="number"
                    defaultValue={enquiry.quantity}
                    className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  />
               </div>
               <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#344054] uppercase tracking-wider">Status</label>
                  <select 
                    name="status"
                    defaultValue={enquiry.status}
                    className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm appearance-none"
                  >
                     <option value="active">Active</option>
                     <option value="pending">Pending</option>
                     <option value="closed">Closed</option>
                  </select>
               </div>
           </div>
           <div className="pt-4 flex gap-3">
              <Button type="button" variant="ghost" className="flex-1" onClick={onClose}>Discard</Button>
              <Button type="submit" className="flex-1">Save Changes</Button>
           </div>
        </form>
    </Modal>
  );
};
