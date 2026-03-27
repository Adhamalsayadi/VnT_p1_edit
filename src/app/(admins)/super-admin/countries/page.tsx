"use client";
import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Plus,
  Pencil
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const mockCountries = [
  { id: 1, name: "Kingdom Of Saudi Arabia", code: "KSA", flag: "/Saudi_flag.png", active: true },
  { id: 2, name: "Bahrain", code: "BH", flag: "/bahrain_flag.png", active: true },
];

export default function SuperAdminCountries() {
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
              <span className="text-[#333]">countries</span>
            </div>

            <div className="flex items-center justify-between mb-8">
               <h1 className="text-2xl font-bold text-[#333]">countries</h1>
               <button className="bg-[#121111] text-white px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-sm">
                  <Plus size={18} />
                  CREATE NEW COUNTRY
               </button>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider w-24">#</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">NAME</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">CODE</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">FLAG</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">IS_ACTIVE</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F2F4F7]">
                      {mockCountries.map((c) => (
                        <tr key={c.id} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-8 py-6 text-sm font-medium text-[#333]">{c.id}</td>
                          <td className="px-8 py-6 font-bold text-sm text-[#333]">{c.name}</td>
                          <td className="px-8 py-6 text-sm font-medium text-[#666]">{c.code}</td>
                          <td className="px-8 py-6">
                             {c.flag ? (
                               <div className="w-10 h-6 relative rounded overflow-hidden shadow-sm">
                                 <Image src={c.flag} alt="flag" fill className="object-cover" />
                               </div>
                             ) : (
                               <div className="w-10 h-6 bg-[#F2F4F7] rounded"></div>
                             )}
                          </td>
                          <td className="px-8 py-6">
                             <span className="bg-[#E9F8F1] text-[#27B973] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                               active
                             </span>
                          </td>
                          <td className="px-8 py-6 text-right">
                             <button className="text-[#999] hover:text-[#333] transition-colors"><Pencil size={18} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>

               {/* Pagination UI */}
               <div className="p-6 border-t border-[#F2F4F7] flex flex-col md:flex-row items-center justify-between gap-4">
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
