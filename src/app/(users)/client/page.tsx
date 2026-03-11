"use client";

import Link from "next/link";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./header";
import { FileText } from "lucide-react";

export default function ClientDashboard() {
  const quickLinks = [
    {
      title: "Enquiries",
      icon: <FileText size={24} />,
      href: "/client/enquiries",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar role="Client" />

      <div className="flex-1 flex flex-col">
        <Header role="Client" />

        <main className="flex-1 p-10">
          <h1 className="text-[28px] font-bold text-[#333] mb-8">
            Quick links
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all flex flex-col items-center justify-center gap-5 border border-transparent hover:border-primary group"
              >
                <div className="p-4 bg-[#F2F4F7] rounded-xl group-hover:bg-primary transition-colors text-[#667085] group-hover:text-black">
                  {link.icon}
                </div>
                <span className="font-bold text-xl text-[#1D2939] group-hover:text-black">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
