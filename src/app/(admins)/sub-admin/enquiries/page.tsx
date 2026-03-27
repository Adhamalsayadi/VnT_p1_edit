"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  Eye, 
  RefreshCcw,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const mockEnquiries = [
  { id: 1, category: "Services", sub: "Services", type: "normal", date: "2024-03-01", unit: "ea", qty: 214, vtm: "approved", admin: "approved", offers: "true", status: "active" },
  { id: 2, category: "Products", sub: "sub of products", type: "normal", date: "2024-03-29", unit: "hr", qty: 200, vtm: "approved", admin: "pending", offers: "false", status: "pending" },
  { id: 3, category: "Services", sub: "sub for services", type: "moderate", date: "2024-04-05", unit: "hr", qty: 40000, vtm: "pending", admin: "pending", offers: "true", status: "active" },
  { id: 4, category: "Products", sub: "sub of products", type: "normal", date: "2024-03-29", unit: "hr", qty: 200, vtm: "approved", admin: "approved", offers: "true", status: "active" },
];

function StatusPill({ status }: { status: string }) {
  const s = status.toLowerCase();
  const styles = {
    approved: "bg-[#E9F8F1] text-[#27B973]",
    active: "bg-[#E9F8F1] text-[#27B973]",
    true: "bg-[#E9F8F1] text-[#27B973]",
    rejected: "bg-[#FEEBEB] text-[#F84F4F]",
    failed: "bg-[#FEEBEB] text-[#F84F4F]",
    false: "bg-[#FEEBEB] text-[#F84F4F]",
    pending: "bg-[#FEEBEB] text-[#F84F4F]", // Looking at VTM - Enq.png, pending for enquiry status is red-ish/orange
    moderate: "bg-[#F2F4F7] text-[#666]",
    normal: "bg-[#E9F8F1] text-[#27B973]",
  }[s] || "bg-[#F2F4F7] text-[#666]";

  return (
    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", styles)}>
      {s}
    </span>
  );
}

export default function VtmEnquiries() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SubAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SubAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#999] mb-8">
              <Link href="/sub-admin" className="hover:text-[#333]">Dashboard</Link>
              <ChevronRight size={14} />
              <span className="text-[#333]">enquiries</span>
            </div>

            <h1 className="text-2xl font-bold text-[#333] mb-6">enquiries</h1>

            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1200px]">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">CATEGORY</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">SUB CATEGORY</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">REQUEST TYPE</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">REQUIRED DATE</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">UNIT</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">QUANTITY</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">VTM STATUS</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">ADMIN STATUS</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">OFFERS RECEIVED</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">ENQUIRY STATUS</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F2F4F7]">
                      {mockEnquiries.map((enq, idx) => (
                        <tr key={idx} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-6 py-6 text-sm text-[#333] font-medium">{enq.category}</td>
                          <td className="px-6 py-6 text-sm text-[#333] font-medium">{enq.sub}</td>
                          <td className="px-6 py-6 whitespace-nowrap"><StatusPill status={enq.type} /></td>
                          <td className="px-6 py-6 text-sm text-[#333] font-medium whitespace-nowrap">{enq.date}</td>
                          <td className="px-6 py-6 text-sm text-[#333] font-medium uppercase">{enq.unit}</td>
                          <td className="px-6 py-6 text-sm text-[#333] font-medium">{enq.qty}</td>
                          <td className="px-6 py-6"><StatusPill status={enq.vtm} /></td>
                          <td className="px-6 py-6"><StatusPill status={enq.admin} /></td>
                          <td className="px-6 py-6"><StatusPill status={enq.offers} /></td>
                          <td className="px-6 py-6"><StatusPill status={enq.status} /></td>
                          <td className="px-6 py-6 text-right">
                             <div className="flex items-center justify-end gap-3 text-[#999]">
                               <button className="hover:text-[#333] transition-colors"><Eye size={18} /></button>
                               <button className="hover:text-[#333] transition-colors"><Package size={18} /></button>
                               <button className="hover:text-[#333] transition-colors"><RefreshCcw size={16} /></button>
                             </div>
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
                    <span className="text-[13px] font-medium text-[#666]">1-4 from 4</span>
                    <div className="flex items-center gap-2">
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC]"><ChevronLeft size={18} /></button>
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC]"><ChevronRight size={18} /></button>
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
