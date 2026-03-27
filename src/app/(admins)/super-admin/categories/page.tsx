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
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const mockCategories = [
  { id: 1, name: "Category 1" },
];

export default function SuperAdminCategories() {
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans relative">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#999] mb-8">
              <Link href="/super-admin" className="hover:text-[#333]">Dashboard</Link>
              <ChevronRight size={14} />
              <span className="text-[#333]">categories</span>
            </div>

            <div className="flex items-center justify-between mb-8">
               <h1 className="text-2xl font-bold text-[#333]">categories</h1>
               <button className="bg-[#121111] text-white px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-sm">
                  <Plus size={18} />
                  CREATE NEW CATEGORY
               </button>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider w-24">#</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">NAME</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider">ICON</th>
                        <th className="px-8 py-6 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F2F4F7]">
                      {mockCategories.map((cat) => (
                        <tr key={cat.id} className="hover:bg-[#F9FAFB] transition-colors group">
                          <td className="px-8 py-6 text-sm font-medium text-[#333]">{cat.id}</td>
                          <td className="px-8 py-6 font-bold text-sm text-[#333]">{cat.name}</td>
                          <td className="px-8 py-6">
                             <div className="w-10 h-10 bg-[#F2F4F7] rounded-full flex items-center justify-center text-[#999]">
                               <ImageIcon size={20} />
                             </div>
                          </td>
                          <td className="px-8 py-6 text-right">
                             <div className="flex items-center justify-end gap-3 text-[#999]">
                               <button onClick={() => setIsSubModalOpen(true)} className="hover:text-[#333] transition-colors"><Eye size={18} /></button>
                               <button className="hover:text-[#333] transition-colors"><Pencil size={18} /></button>
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
                    <div className="relative group">
                      <select className="appearance-none bg-[#F9FAFB] border border-[#EAECF0] rounded-lg px-4 py-2 pr-10 text-[13px] font-bold text-[#1D1F24] outline-none cursor-pointer">
                        <option>10</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] font-medium text-[#666]">1-1 from 1</span>
                    <div className="flex items-center gap-2">
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC]"><ChevronLeft size={18} /></button>
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC]"><ChevronRight size={18} /></button>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </main>

        {/* Sub Categories Modal */}
        {isSubModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-6 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl border border-[#F2F4F7] w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-200">
               <div className="p-8 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#333]">Sub Categories Of (231)</h3>
                  <button onClick={() => setIsSubModalOpen(false)} className="text-[#999] hover:text-[#333] border border-[#EAECF0] p-1.5 rounded-lg transition-colors">
                     <span className="text-2xl leading-none">×</span>
                  </button>
               </div>

               <div className="p-8">
                  <div className="flex justify-end mb-6">
                    <button className="bg-[#121111] text-white px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-sm">
                      <Plus size={16} />
                      CREATE NEW SUB CATEGORY
                    </button>
                  </div>

                  <div className="border border-[#F2F4F7] rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#F2F4F7]">
                          <th className="px-6 py-4 text-[11px] font-bold text-[#999] uppercase tracking-wider w-20">#</th>
                          <th className="px-6 py-4 text-[11px] font-bold text-[#999] uppercase tracking-wider">NAME</th>
                          <th className="px-6 py-4 text-[11px] font-bold text-[#999] uppercase tracking-wider">ICON</th>
                          <th className="px-6 py-4 text-[11px] font-bold text-[#999] uppercase tracking-wider text-right">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={4} className="px-6 py-20 text-center text-[#999] text-sm font-medium">No data</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 border-t border-[#F2F4F7] flex items-center justify-between mt-4">
                     <div className="flex items-center gap-3">
                        <span className="text-[12px] font-medium text-[#666]">items per page</span>
                        <select className="bg-[#F9FAFB] border border-[#EAECF0] rounded-lg px-2 py-1 text-[12px] font-bold text-[#1D1F24] outline-none">
                          <option>10</option>
                        </select>
                     </div>
                     <div className="flex items-center gap-4">
                        <span className="text-[12px] font-medium text-[#666]">1-1 from 1</span>
                        <div className="flex items-center gap-2">
                           <button className="text-[#CCC]"><ChevronLeft size={16} /></button>
                           <button className="text-[#CCC]"><ChevronRight size={16} /></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
