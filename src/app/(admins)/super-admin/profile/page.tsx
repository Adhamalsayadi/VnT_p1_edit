"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  User, 
  ShieldCheck,
  ChevronRight,
  Camera
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AdminProfile() {
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1200px] mx-auto">
            
            <h1 className="text-2xl font-bold text-[#333] mb-10 tracking-tight">Account management</h1>

            <div className="flex flex-col lg:flex-row gap-8">
               {/* Left Navigation Sidebar inside page */}
               <aside className="w-full lg:w-72 shrink-0 space-y-2">
                  <button 
                    onClick={() => setActiveTab("basic")}
                    className={cn(
                      "w-full flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-bold transition-all",
                      activeTab === "basic" ? "bg-white text-[#1D1F24] shadow-sm border border-[#F2F4F7]" : "text-[#999] hover:text-[#333]"
                    )}
                  >
                    <User size={18} />
                    <span>Basic info</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab("security")}
                    className={cn(
                      "w-full flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-bold transition-all",
                      activeTab === "security" ? "bg-white text-[#1D1F24] shadow-sm border border-[#F2F4F7]" : "text-[#999] hover:text-[#333]"
                    )}
                  >
                    <ShieldCheck size={18} />
                    <span>Security</span>
                  </button>
               </aside>

               {/* Right Content Area */}
               <div className="flex-1">
                  {activeTab === "basic" ? (
                    <div className="bg-white rounded-[32px] shadow-sm border border-[#F2F4F7] p-12">
                       <div className="flex flex-col items-center mb-12">
                          <div className="relative group">
                             <div className="w-32 h-32 rounded-full bg-[#1D1F24] flex items-center justify-center text-white text-[40px] font-black border-4 border-[#F5F5F5] overflow-hidden">
                                A
                             </div>
                             <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md border border-[#F2F4F7] text-[#666] hover:text-black transition-all">
                                <Camera size={18} />
                             </button>
                          </div>
                       </div>

                       <form className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {/* User name */}
                             <div className="relative">
                                <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">USER NAME</label>
                                <input type="text" defaultValue="admin" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                             </div>
                             {/* First name */}
                             <div className="relative">
                                <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">FIRST NAME</label>
                                <input type="text" defaultValue="admin" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                             </div>
                             {/* Last name */}
                             <div className="relative">
                                <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">LAST NAME</label>
                                <input type="text" defaultValue="admin" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                             </div>
                             {/* Email */}
                             <div className="relative">
                                <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">EMAIL ADDRESS</label>
                                <input type="email" defaultValue="admin@vnt.com" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                             </div>
                             {/* Phone */}
                             <div className="relative">
                                <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">PHONE NUMBER</label>
                                <input type="text" defaultValue="+966 50 000 0000" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                             </div>
                          </div>

                          <div className="flex justify-end pt-6">
                             <button type="submit" className="bg-[#121111] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-[2px] hover:bg-black transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-[0.98]">
                               Save changes
                             </button>
                          </div>
                       </form>
                    </div>
                  ) : (
                    <div className="bg-white rounded-[32px] shadow-sm border border-[#F2F4F7] p-12">
                       <form className="space-y-8 max-w-2xl mx-auto">
                          <div className="relative">
                             <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">CURRENT PASSWORD</label>
                             <input type="password" placeholder="••••••••" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                          </div>
                          <div className="relative">
                             <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">NEW PASSWORD</label>
                             <input type="password" placeholder="••••••••" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                          </div>
                          <div className="relative">
                             <label className="absolute -top-2.5 left-4 bg-white px-1.5 text-[11px] font-bold text-[#98A2B3] uppercase tracking-widest z-10">CONFIRM PASSWORD</label>
                             <input type="password" placeholder="••••••••" className="w-full border border-[#EAECF0] rounded-xl px-5 py-4 text-sm font-bold text-[#1A1C1E] outline-none focus:border-black transition-colors" />
                          </div>

                          <div className="flex justify-end pt-6">
                             <button type="submit" className="bg-[#121111] text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-[2px] hover:bg-black transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-[0.98]">
                               Update Password
                             </button>
                          </div>
                       </form>
                    </div>
                  )}
               </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
