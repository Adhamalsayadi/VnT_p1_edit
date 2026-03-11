"use client";

import Link from "next/link";

export default function SupplierResetPasswordPage() {
  return (
    <div className="p-5">
      <div className="text-sm text-[#999] mb-[25px]">
        <Link href="/supplier" className="hover:text-black transition-colors">
          Dashboard
        </Link>{" "}
        &gt; <span className="text-[#333]">Reset password</span>
      </div>

      <h1 className="text-2xl font-bold mb-10 text-[#333]">Reset password</h1>

      <div className="bg-white rounded-xl border border-[#EBEEF5] p-10 max-w-[500px]">
        <div className="mb-[25px]">
          <label className="block text-sm text-[#333] font-semibold mb-2.5">
            Current password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full p-3 border border-[#EBEEF5] rounded-lg bg-[#F9FAFB] outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div className="mb-[25px]">
          <label className="block text-sm text-[#333] font-semibold mb-2.5">
            New password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full p-3 border border-[#EBEEF5] rounded-lg bg-[#F9FAFB] outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div className="mb-[25px]">
          <label className="block text-sm text-[#333] font-semibold mb-2.5">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full p-3 border border-[#EBEEF5] rounded-lg bg-[#F9FAFB] outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <button className="w-full bg-[#1A237E] text-white border-none p-[15px] rounded-lg font-bold cursor-pointer mt-2.5 hover:bg-[#121858] transition-colors">
          UPDATE
        </button>
      </div>
    </div>
  );
}
