"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  Plus, 
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const mockVtmAdmins = [
  { id: "1", name: "Suleman Mohamed", email: "suleman@vnt.com", status: "Active" },
  { id: "2", name: "Ahmed Ali", email: "ahmed@vnt.com", status: "Active" },
];

export default function SuperAdminVtmManagement() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            <div className="flex items-center justify-between gap-4">
               {/* Search */}
               <div className="relative w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" size={16} />
                  <input 
                     type="text" 
                     placeholder="Search..." 
                     className="w-full bg-[#E0E2E7] border-none rounded-lg pl-10 pr-4 py-2 text-sm font-medium placeholder-[#999] outline-none focus:ring-1 focus:ring-[#1D1F24]"
                  />
               </div>

               {/* Add Button */}
               <button className="bg-[#121111] text-white px-6 py-2.5 rounded-lg text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-sm">
                  <Plus size={18} />
                  add vtm
               </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden mt-6">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">NAME</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">EMAIL</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">STATUS</th>
                        <th className="px-8 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F2F4F7]">
                      {mockVtmAdmins.map((vtm) => (
                        <tr key={vtm.id} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-8 py-4">
                            <span className="text-sm font-bold text-[#1D1F24]">{vtm.name}</span>
                          </td>
                          <td className="px-8 py-4">
                            <span className="text-sm font-medium text-[#666]">{vtm.email}</span>
                          </td>
                          <td className="px-8 py-4 uppercase">
                            <span className={cn(
                              "inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest px-2.5 py-1 rounded-md",
                              vtm.status === "Active" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                            )}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current" />
                              {vtm.status}
                            </span>
                          </td>
                          <td className="px-8 py-4 text-right">
                             <button className="p-2 text-[#999] hover:text-[#333] transition-colors">
                               <MoreVertical size={18} />
                             </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>

               {/* Pagination Component as per design */}
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
