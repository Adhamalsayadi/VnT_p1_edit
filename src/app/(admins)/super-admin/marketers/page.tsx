"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  Pencil,
  RefreshCcw,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const mockMarketers = [
  { id: 1, name: "Suliman", code: "SA-MA-23BRX20ME", vtmStatus: "pending", adminStatus: "pending" },
  { id: 2, name: "User demo 7", code: "SA-MA-23BRX20MB", vtmStatus: "pending", adminStatus: "pending" },
  { id: 3, name: "Amro", code: "KSA-MA-244NZPJZD", vtmStatus: "pending", adminStatus: "pending" },
];

function StatusPill({ status }: { status: string }) {
  const s = status.toLowerCase();
  return (
    <span className="bg-[#F2F4F7] text-[#666] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
      {s}
    </span>
  );
}

export default function SuperAdminMarketers() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#999] mb-8">
              <Link href="/super-admin" className="hover:text-[#333]">Dashboard</Link>
              <ChevronRight size={14} />
              <span className="text-[#333]">marketers</span>
            </div>

            <div className="flex items-center justify-between mb-6">
               <h1 className="text-2xl font-bold text-[#333]">marketers</h1>
               <button className="bg-[#121111] text-white px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-sm">
                  <Plus size={18} />
                  CREATE NEW ACCOUNT
               </button>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider w-16">#</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">NAME</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">CODE</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">VTM STATUS</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">ADMIN STATUS</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F2F4F7]">
                      {mockMarketers.map((m) => (
                        <tr key={m.id} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-8 py-5 text-sm font-medium text-[#333]">{m.id}</td>
                          <td className="px-8 py-5">
                            <span className="text-sm font-bold text-[#333] hover:underline transition-all cursor-pointer">
                              {m.name}
                            </span>
                          </td>
                          <td className="px-8 py-5">
                            <span className="text-sm font-medium text-[#666]">{m.code}</span>
                          </td>
                          <td className="px-8 py-5">
                            <StatusPill status={m.vtmStatus} />
                          </td>
                          <td className="px-8 py-5">
                            <StatusPill status={m.adminStatus} />
                          </td>
                          <td className="px-8 py-5 text-right">
                             <div className="flex items-center justify-end gap-3 text-[#999]">
                               <button className="hover:text-[#333] transition-colors"><Pencil size={18} /></button>
                               <button className="hover:text-[#333] transition-colors"><RefreshCcw size={16} /></button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>

               {/* Pagination */}
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
                    <span className="text-[13px] font-medium text-[#666]">0-0 from 0</span>
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
