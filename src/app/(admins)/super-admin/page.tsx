"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  Users, 
  Handshake, 
  FileText, 
  TrendingUp, 
  Tag,
  Megaphone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  MoreVertical
} from "lucide-react";
import { cn } from "@/lib/utils";

const topStats = [
  { label: "accounts", count: 0, color: "text-[#4A6DFF]", bg: "bg-[#EBEFFF]", icon: <Circle size={8} fill="currentColor" /> },
  { label: "deals", count: 0, color: "text-[#27B973]", bg: "bg-[#E9F8F1]", icon: <Circle size={8} fill="currentColor" /> },
  { label: "enquiries", count: 0, color: "text-[#2AC9D2]", bg: "bg-[#EAF9FA]", icon: <Circle size={8} fill="currentColor" /> },
  { label: "offers", count: 0, color: "text-[#F84F4F]", bg: "bg-[#FEEBEB]", icon: <Circle size={8} fill="currentColor" /> },
];

const middleStats = [
  { label: "clients", count: 4, color: "text-[#4A6DFF]", bg: "bg-[#EBEFFF]", icon: <Circle size={8} fill="currentColor" /> },
  { label: "supplier", count: 6, color: "text-[#27B973]", bg: "bg-[#E9F8F1]", icon: <Circle size={8} fill="currentColor" /> },
  { label: "marketer", count: 3, color: "text-[#2AC9D2]", bg: "bg-[#EAF9FA]", icon: <Circle size={8} fill="currentColor" /> },
];

const bottomStats = [
  { label: "Paid ads", count: 0, color: "text-[#27B973]", bg: "bg-[#E9F8F1]", icon: <Circle size={8} fill="currentColor" /> },
  { label: "Free ads", count: 0, color: "text-[#F84F4F]", bg: "bg-[#FEEBEB]", icon: <Circle size={8} fill="currentColor" /> },
];

export default function SuperAdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col min-w-0 font-sans">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-8 pb-10">
            
            {/* Stats Grid - Top Row (4 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topStats.map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-[20px] shadow-sm border border-[#F2F4F7] flex flex-col items-center justify-center text-center group hover:shadow-md transition-all">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                    {stat.icon}
                  </div>
                  <h3 className="text-[32px] font-bold text-[#1D1F24] leading-none mb-2">{stat.count}</h3>
                  <p className="text-xs font-medium text-[#999] capitalize tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Stats Grid - Middle Row (3 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {middleStats.map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-[20px] shadow-sm border border-[#F2F4F7] flex flex-col items-center justify-center text-center group hover:shadow-md transition-all">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                    {stat.icon}
                  </div>
                  <h3 className="text-[32px] font-bold text-[#1D1F24] leading-none mb-2">{stat.count}</h3>
                  <p className="text-xs font-medium text-[#999] capitalize tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Stats Grid - Bottom Row (2 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[66%] mx-auto lg:mx-0 lg:max-w-none">
              {bottomStats.map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-[20px] shadow-sm border border-[#F2F4F7] flex flex-col items-center justify-center text-center group hover:shadow-md transition-all">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                    {stat.icon}
                  </div>
                  <h3 className="text-[32px] font-bold text-[#1D1F24] leading-none mb-2">{stat.count}</h3>
                  <p className="text-xs font-medium text-[#999] capitalize tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Data Table Section */}
            <div className="bg-white rounded-[20px] shadow-sm border border-[#F2F4F7] overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1200px]">
                    <thead>
                      <tr className="border-b border-[#F2F4F7]">
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">TITLE</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">CLIENT</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">CATEGORY</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">SUB CATEGORY</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">REQUEST TYPE</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">REQUIRED DATE</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">UNIT</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider">QUANTITY</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">VTM STATUS</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">ADMIN STATUS</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">OFFERS RECEIVED</th>
                        <th className="px-6 py-5 text-[11px] font-bold text-[#999] uppercase tracking-wider whitespace-nowrap">ENQUIRY STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#F2F4F7]">
                        <td colSpan={12} className="px-6 py-12 text-center text-sm font-medium text-[#999] italic">
                          No data available
                        </td>
                      </tr>
                    </tbody>
                  </table>
               </div>

               {/* Pagination Footer */}
               <div className="p-6 border-t border-[#F2F4F7] flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-medium text-[#666]">items per page</span>
                    <div className="relative group">
                      <select className="appearance-none bg-[#F9FAFB] border border-[#EAECF0] rounded-lg px-4 py-2 pr-10 text-[13px] font-bold text-[#1D1F24] outline-none cursor-pointer">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-[13px] font-medium text-[#666]">0-0 from 0</span>
                    <div className="flex items-center gap-2">
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC] cursor-not-allowed">
                          <ChevronLeft size={18} />
                       </button>
                       <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#CCC] cursor-not-allowed">
                          <ChevronRight size={18} />
                       </button>
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
