"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Sidebar from "../../client/Sidebar/Sidebar";
import Header from "../../client/header";

function PasswordField({ label, name }: { label: string; name: string }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label className="block text-sm font-semibold text-[#344054] mb-1.5">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={name}
          placeholder="••••••••"
          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl outline-none focus:ring-2 focus:ring-primary/20 text-sm pr-12 transition-all"
          required
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#344054] transition-colors"
          tabIndex={-1}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

export default function SupplierResetPasswordPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar role="Supplier" />
      <div className="flex-1 flex flex-col">
        <Header role="Supplier" />

        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="max-w-lg">
            <div className="text-[#667085] text-sm font-medium mb-8">
              <Link href="/supplier" className="hover:text-black transition-colors">Dashboard</Link>{" "}
              &gt; <span className="text-[#98A2B3]">Security Settings</span>
            </div>

            <h1 className="text-2xl font-bold text-[#101828] mb-2">Security Settings</h1>
            <p className="text-[#667085] text-sm mb-8">Update your password to keep your account secure.</p>

            {success ? (
              <div className="bg-[#ECFDF3] border border-[#6CE9A6] rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#027A48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="font-bold text-[#027A48]">Password updated successfully!</p>
                <p className="text-sm text-[#039855] mt-1">Your new password is now active.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#EAECF0] shadow-sm p-8 space-y-5">
                <PasswordField label="Current password" name="currentPassword" />
                <PasswordField label="New password" name="newPassword" />
                <PasswordField label="Confirm new password" name="confirmPassword" />
                <div className="pt-2">
                  <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm">
                    Update Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
