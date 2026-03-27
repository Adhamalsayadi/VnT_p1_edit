"use client";

import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  ChevronRight,
  ChevronDown,
  Image as ImageIcon,
  Upload
} from "lucide-react";
import Link from "next/link";

export default function CreateVTM() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1200px] mx-auto">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#999] mb-8">
              <Link href="/super-admin" className="hover:text-[#333]">Dashboard</Link>
              <ChevronRight size={14} />
              <Link href="/super-admin/vtm" className="hover:text-[#333]">VTMs</Link>
              <ChevronRight size={14} />
              <span className="text-[#333]">create admin account</span>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] p-10">
               <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {/* Name */}
                     <div className="relative">
                        <input type="text" placeholder="Name" className="w-full border border-[#EAECF0] rounded-lg px-5 py-4 text-sm font-medium text-[#1A1C1E] outline-none focus:border-black transition-colors placeholder:text-[#999]" />
                     </div>
                     {/* Email */}
                     <div className="relative">
                        <input type="email" placeholder="Email" className="w-full border border-[#EAECF0] rounded-lg px-5 py-4 text-sm font-medium text-[#1A1C1E] outline-none focus:border-black transition-colors placeholder:text-[#999]" />
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-1">
                        {/* Mobile Code */}
                        <div className="relative col-span-1">
                           <div className="absolute -top-2.5 left-4 bg-white px-1.5 text-[10px] font-bold text-[#98A2B3] uppercase tracking-wider z-10">Mobile Code</div>
                           <div className="relative">
                              <select className="w-full appearance-none border border-[#EAECF0] rounded-lg px-5 py-4 text-sm font-medium text-[#1A1C1E] outline-none bg-white tracking-widest">
                                 <option>966</option>
                              </select>
                              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                           </div>
                        </div>
                        {/* Phone */}
                        <div className="md:col-span-2">
                           <input type="text" placeholder="Phone" className="w-full border border-[#EAECF0] rounded-lg px-5 py-4 text-sm font-medium text-[#1A1C1E] outline-none focus:border-black transition-colors placeholder:text-[#999]" />
                        </div>
                     </div>

                     {/* Country */}
                     <div className="relative">
                        <div className="relative">
                           <select className="w-full appearance-none border border-[#EAECF0] rounded-lg px-5 py-4 text-sm font-medium text-[#999] outline-none bg-white">
                              <option>Country</option>
                           </select>
                           <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                        </div>
                     </div>
                  </div>

                  {/* Image Upload Area */}
                  <div className="space-y-4">
                     <p className="text-sm font-bold text-[#333]">Image</p>
                     <div className="relative flex items-center">
                        <div className="absolute left-4 text-[#999]">
                           <ImageIcon size={20} />
                        </div>
                        <div className="w-full border border-[#EAECF0] rounded-lg pl-12 pr-4 py-4 flex items-center justify-between text-sm text-[#999]">
                           <span></span>
                           <button type="button" className="text-[#333] font-bold hover:underline">browse</button>
                        </div>
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4">
                     <Link href="/super-admin/vtm" className="px-10 py-4 rounded-lg font-black text-sm uppercase tracking-widest bg-[#EAEAEA] text-[#333] hover:bg-[#DDD] transition-all">
                        CANCEL
                     </Link>
                     <button type="submit" className="px-10 py-4 rounded-lg font-black text-sm uppercase tracking-widest bg-[#121111] text-white hover:bg-black transition-all shadow-md">
                        CREATE
                     </button>
                  </div>
               </form>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
