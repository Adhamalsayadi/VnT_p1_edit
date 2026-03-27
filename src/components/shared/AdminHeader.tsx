"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Bell, 
  Settings,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminHeaderProps {
  role: "SuperAdmin" | "SubAdmin";
}

export default function AdminHeader({ role }: AdminHeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-[#E5E5E5] flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Search Bar Placeholder */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999] group-focus-within:text-[#333] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm font-medium placeholder-[#999] pl-10 h-10"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-6">
        <button className="text-[#999] hover:text-[#333] transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-[#E5E5E5]">
          <div className="bg-[#EBEFFF] text-[#4A6DFF] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            {role === "SuperAdmin" ? "admin" : "vtm"}
          </div>
          
          <Link 
            href={role === "SuperAdmin" ? "/super-admin/profile" : "/sub-admin/profile"} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#1D1F24] flex items-center justify-center text-white text-xs font-bold ring-2 ring-white overflow-hidden text-center leading-none">
                {role === "SuperAdmin" ? "A" : "U"}
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <button className="text-[#999] group-hover:text-[#333] transition-colors">
              <ChevronDown size={14} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

