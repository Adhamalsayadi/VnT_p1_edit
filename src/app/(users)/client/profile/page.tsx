"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return (
      <div className="p-5 flex flex-col gap-6 justify-center items-center min-h-[400px]">
        <div className="text-gray-500">Loading profile data...</div>
      </div>
    );
  }

  const userInfo = [
    { label: "Name", value: user.name || "Not provided" },
    { label: "Email", value: user.email || "Not provided" },
    { label: "Phone", value: user.phone || "Not provided" },
    { label: "Role", value: user.role || "Not provided" },
  ];

  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="text-[#666] text-sm mb-[25px]">
        <Link href="/dashboard" className="hover:text-black transition-colors">
          Dashboard
        </Link>{" "}
        &gt; <span className="text-[#333]">Edit profile</span>
      </div>

      <h1 className="text-lg font-bold text-[#333] mb-[30px] border-b-2 border-[#EEE] pb-[15px]">
        USER INFORMATION
      </h1>

      <div className="bg-white rounded-xl border border-[#EBEEF5] p-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 shadow-sm">
        {userInfo.map((info, index) => (
          <div key={index} className="flex flex-col gap-2.5">
            <span className="text-sm text-[#999] font-medium">
              {info.label}
            </span>
            <span className="text-base text-[#333] font-bold">
              {info.value}
            </span>
          </div>
        ))}
      </div>

      <button className="bg-black text-white px-10 py-3 rounded-lg font-bold cursor-pointer hover:opacity-80 transition-opacity">
        Edit Profile
      </button>
    </div>
  );
}
