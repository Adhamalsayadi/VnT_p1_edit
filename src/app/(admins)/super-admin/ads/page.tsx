"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  Plus, 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Image as ImageIcon,
  Pencil,
  Eye,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const mockAds = [
  { id: 1, title: "Summer Sale", image: "/ads/ad1.png", status: "active" },
  { id: 2, title: "New Arrivals", image: "/ads/ad2.png", status: "inactive" },
];

export default function SuperAdminAds() {
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
              <span className="text-[#333]">ads</span>
            </div>

            <div className="flex items-center justify-between mb-8">
               <h1 className="text-2xl font-bold text-[#333]">ads</h1>
               <button className="bg-[#121111] text-white px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-sm">
                  <Plus size={18} />
                  CREATE NEW AD
               </button>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider w-24">#</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">TITLE</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">IMAGE</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">STATUS</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F2F4F7]">
                      {mockAds.map((ad, idx) => (
                        <tr key={ad.id} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-8 py-6 text-sm font-medium text-[#333]">{idx + 1}</td>
                          <td className="px-8 py-6 font-bold text-sm text-[#333]">{ad.title}</td>
                          <td className="px-8 py-6">
                             <div className="w-24 h-12 bg-[#F2F4F7] rounded overflow-hidden relative border border-[#EAECF0]">
                                <ImageIcon className="absolute inset-0 m-auto text-[#CCC]" size={20} />
                             </div>
                          </td>
                          <td className="px-8 py-6">
                             <span className={cn(
                               "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                               ad.status === 'active' ? "bg-[#E9F8F1] text-[#27B973]" : "bg-[#F2F4F7] text-[#666]"
                             )}>
                               {ad.status}
                             </span>
                          </td>
                          <td className="px-8 py-6 text-right">
                             <div className="flex items-center justify-end gap-3 text-[#999]">
                               <button className="hover:text-[#333] transition-all"><Eye size={18} /></button>
                               <button className="hover:text-[#333] transition-all"><Pencil size={18} /></button>
                               <button className="hover:text-red-500 transition-all"><Trash2 size={18} /></button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>

               <div className="p-6 border-t border-[#F2F4F7] flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-medium text-[#666]">items per page</span>
                    <select className="bg-[#F9FAFB] border border-[#EAECF0] rounded-lg px-4 py-2 text-[13px] font-bold text-[#1D1F24] outline-none">
                        <option>10</option>
                    </select>
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
