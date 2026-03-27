"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  LayoutDashboard, 
  Users, 
  Handshake, 
  FileText, 
  Tag, 
  Layers, 
  Globe, 
  Settings, 
  LogOut,
  ShieldCheck,
  TrendingUp,
  Megaphone,
  Menu,
  ChevronRight,
  Circle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  role: "SuperAdmin" | "SubAdmin";
}

export default function AdminSidebar({ role }: AdminSidebarProps) {
  const pathname = usePathname();

  const menuItems = role === "SuperAdmin" ? [
    { name: "VTM", icon: <ShieldCheck size={18} />, href: "/super-admin/vtm" },
    { name: "Clients", icon: <Users size={18} />, href: "/super-admin/clients" },
    { name: "Suppliers", icon: <Handshake size={18} />, href: "/super-admin/suppliers" },
    { name: "Marketers", icon: <Users size={18} />, href: "/super-admin/marketers" },
    { name: "enquiries", icon: <FileText size={18} />, href: "/super-admin/enquiries" },
    { name: "deals", icon: <TrendingUp size={18} />, href: "/super-admin/deals" },
    { name: "categories", icon: <Layers size={18} />, href: "/super-admin/categories" },
    { name: "countries", icon: <Globe size={18} />, href: "/super-admin/countries" },
    { name: "ads", icon: <Megaphone size={18} />, href: "/super-admin/ads" },
  ] : [
    { name: "Clients", icon: <Users size={18} />, href: "/sub-admin/clients" },
    { name: "Suppliers", icon: <Handshake size={18} />, href: "/sub-admin/suppliers" },
    { name: "enquiries", icon: <FileText size={18} />, href: "/sub-admin/enquiries" },
    { name: "ads", icon: <Megaphone size={18} />, href: "/sub-admin/ads" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#F5F5F5] border-r border-[#E5E5E5] flex flex-col transition-all duration-300 overflow-y-auto shrink-0">
      {/* Sidebar Header */}
      <div className="p-6 flex items-center justify-between border-b border-[#E5E5E5] mb-6">
        <Link href={role === "SuperAdmin" ? "/super-admin" : "/sub-admin"} className="flex items-center gap-3">
          <Image src="/VT.png" alt="Logo" width={32} height={24} className="object-contain" />
          <span className="text-sm font-bold text-[#333]">Vendor & Tender</span>
        </Link>
        <button className="text-[#999] hover:text-[#333]">
          <Circle size={12} fill="#999" fillOpacity={0.2} />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-8">
        {/* Data panel Section */}
        <div>
          <Link 
            href={role === "SuperAdmin" ? "/super-admin" : "/sub-admin"}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
              (pathname === "/super-admin" || pathname === "/sub-admin")
                ? "bg-[#E0E2E7] text-[#1D1F24]" 
                : "text-[#666] hover:bg-[#EAEAEA]"
            )}
          >
            <LayoutDashboard size={18} />
            <span>Data panel</span>
          </Link>
        </div>

        {/* PLATFORM Category */}
        <div className="space-y-2">
          <p className="px-4 text-[10px] font-bold text-[#999] uppercase tracking-wider mb-2">PLATFORM</p>
          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                    isActive 
                      ? "text-[#1D1F24]" 
                      : "text-[#666] hover:text-[#1D1F24] hover:bg-[#EAEAEA]"
                  )}
                >
                  <span className={cn("transition-colors", isActive ? "text-[#1D1F24]" : "text-[#999] group-hover:text-[#1D1F24]")}>
                    {item.icon}
                  </span>
                  <span className="capitalize">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-6 mt-auto border-t border-[#E5E5E5]">
        <button className="flex items-center gap-3 px-4 py-2.5 w-full text-sm font-medium text-[#666] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut size={18} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
