"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  RefreshCcw
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const mockDeals = [
  { id: 1, enquiry: "Second Enquiry", client: "Company name 2", supplier: "Company name 5", inv: "invoice sent", pay: "payment not received" },
  { id: 2, enquiry: "enquiry title new", client: "company 2", supplier: "My Company", inv: "invoice not sent", pay: "payment not received" },
];

function StatusPill({ status }: { status: string }) {
  const s = status.toLowerCase();
  const styles = {
    "invoice sent": "bg-[#E9F8F1] text-[#27B973]",
    "invoice not sent": "bg-[#FEEBEB] text-[#F84F4F]",
    "payment received": "bg-[#E9F8F1] text-[#27B973]",
    "payment not received": "bg-[#FEEBEB] text-[#F84F4F]",
  }[s] || "bg-[#F2F4F7] text-[#666]";

  return (
    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider", styles)}>
      {s}
    </span>
  );
}

export default function SuperAdminDeals() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#999] mb-8">
              <Link href="/super-admin" className="hover:text-[#333]">Dashboard</Link>
              <ChevronRight size={14} />
              <span className="text-[#333]">deals</span>
            </div>

            <h1 className="text-2xl font-bold text-[#333] mb-6">deals</h1>

            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider w-16">#</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">ENQUIRY</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">CLIENT</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">SUPPLIER</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">INVOICE SENT</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">PAYMENT RECEIVED</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F2F4F7]">
                      {mockDeals.map((deal) => (
                        <tr key={deal.id} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-8 py-6 text-sm font-medium text-[#333]">{deal.id}</td>
                          <td className="px-8 py-6 font-bold text-sm text-[#333] underline-offset-4 hover:underline cursor-pointer">{deal.enquiry}</td>
                          <td className="px-8 py-6 font-bold text-sm text-[#333] underline-offset-4 hover:underline cursor-pointer">{deal.client}</td>
                          <td className="px-8 py-6 font-bold text-sm text-[#333] underline-offset-4 hover:underline cursor-pointer">{deal.supplier}</td>
                          <td className="px-8 py-6 opacity-90"><StatusPill status={deal.inv} /></td>
                          <td className="px-8 py-6 opacity-90"><StatusPill status={deal.pay} /></td>
                          <td className="px-8 py-6 text-right">
                             <button className="text-[#999] hover:text-[#333] transition-colors border border-[#E5E5E5] p-2 rounded-lg"><RefreshCcw size={16} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>

               <div className="p-6 flex items-center justify-between border-t border-[#F2F4F7]">
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-medium text-[#666]">items per page</span>
                    <div className="relative group">
                      <select className="appearance-none bg-[#F9FAFB] border border-[#EAECF0] rounded-lg px-4 py-2 pr-10 text-[13px] font-bold text-[#1D1F24] outline-none cursor-pointer">
                        <option>10</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] font-medium text-[#666]">1-2 from 2</span>
                    <div className="flex items-center gap-2">
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC] cursor-not-allowed"><ChevronLeft size={18} /></button>
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC] cursor-not-allowed"><ChevronRight size={18} /></button>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
