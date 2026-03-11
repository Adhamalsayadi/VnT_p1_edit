"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../../client/Sidebar/Sidebar";
import Header from "../../client/header";
import { Eye, Edit3, Trash2, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const initialOffers = [
  {
    id: 1,
    enquiryTitle: "Deep Water Drilling",
    price: "$50,000",
    vtmStatus: "approved",
    adminStatus: "approved",
    acceptanceStatus: "accepted",
    isHidden: false,
  },
  {
    id: 2,
    enquiryTitle: "Oil Rig Maintenance",
    price: "$25,000",
    vtmStatus: "pending",
    adminStatus: "pending",
    acceptanceStatus: "pending",
    isHidden: true,
  },
];

export default function SupplierOffersPage() {
  const [offers, setOffers] = useState(initialOffers);

  const handleAction = (id: number, action: string) => {
    if (action === 'Hide') {
        setOffers(prev => prev.map(o => o.id === id ? { ...o, isHidden: !o.isHidden } : o));
    } else {
        alert(`${action} action on offer ${id}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar role="Supplier" />
      <div className="flex-1 flex flex-col">
        <Header role="Supplier" />

        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="flex flex-col gap-8">
            <div className="text-[#667085] text-sm font-medium">
              <Link href="/users/supplier" className="hover:text-black transition-colors">
                Dashboard
              </Link>{" "}
              &gt; <span className="text-[#98A2B3]">Offers</span>
            </div>

            <h1 className="text-[28px] font-bold text-[#101828]">Offers</h1>

            <div className="bg-white rounded-2xl border border-[#EAECF0] overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#EAECF0]">
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Enquiry Title</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Price</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">VTM Status</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Admin Status</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Acceptance</th>
                    <th className="text-right px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {offers.map((offer) => (
                    <tr key={offer.id} className={cn(
                        "hover:bg-[#F9FAFB] transition-all duration-300",
                        offer.isHidden && "bg-[#F2F4F7]/60 opacity-60 grayscale-[0.5]"
                    )}>
                      <td className="px-6 py-5 text-sm font-semibold text-[#101828]">
                        <div className="flex items-center gap-2">
                           {offer.enquiryTitle}
                           {offer.isHidden && <span className="px-1.5 py-0.5 rounded bg-gray-200 text-[10px] font-bold text-gray-600 uppercase">Hidden</span>}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-[#667085]">{offer.price}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                            offer.vtmStatus === "approved" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#F2F4F7] text-[#667085]"
                        }`}>
                          {offer.vtmStatus}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                            offer.adminStatus === "approved" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#F2F4F7] text-[#667085]"
                        }`}>
                          {offer.adminStatus}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                            offer.acceptanceStatus === "accepted" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#F2F4F7] text-[#667085]"
                        }`}>
                          {offer.acceptanceStatus}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-3 text-[#667085]">
                          <button onClick={() => handleAction(offer.id, 'View')} className="p-1 hover:text-primary transition-colors"><Eye size={18} /></button>
                          <button onClick={() => handleAction(offer.id, 'Edit')} className="p-1 hover:text-primary transition-colors"><Edit3 size={18} /></button>
                          <button onClick={() => handleAction(offer.id, 'Delete')} className="p-1 hover:text-[#B42318] transition-colors"><Trash2 size={18} /></button>
                          <button onClick={() => handleAction(offer.id, 'Hide')} className={cn("p-1 transition-colors", offer.isHidden ? "text-primary" : "hover:text-gray-900")}><EyeOff size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
