"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  ShieldCheck, 
  Save,
  CheckCircle,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SuperAdminResetPassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <AdminSidebar role="SuperAdmin" />
      <div className="flex-1 flex flex-col">
        <AdminHeader role="SuperAdmin" />

        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[10px] font-black text-[#98A2B3] uppercase tracking-[3px]">
                <span className="text-[#101828]">Security</span>
                <ChevronRight size={12} />
                <span className="text-[#101828]">Access Control</span>
              </div>
              <h1 className="text-3xl font-black text-[#101828]">Change Password</h1>
            </div>

            <div className="bg-white rounded-[40px] border border-[#EAECF0] shadow-sm p-10 md:p-14 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-24 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#101828] text-primary flex items-center justify-center">
                     <Lock size={24} />
                  </div>
                  <div>
                     <h3 className="text-xl font-black text-[#101828]">Security Credentials</h3>
                     <p className="text-[#667085] text-xs font-medium italic">Update your administrative access password.</p>
                  </div>
               </div>

               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                     <label className="block text-[10px] font-black text-[#667085] uppercase tracking-widest ml-1">Current Password</label>
                     <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={18} />
                        <input 
                           type={showCurrent ? "text" : "password"} 
                           placeholder="••••••••" 
                           className="w-full pl-12 pr-12 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 text-sm font-bold transition-all" 
                        />
                        <button 
                           type="button"
                           onClick={() => setShowCurrent(!showCurrent)}
                           className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#101828] transition-colors"
                        >
                           {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                     </div>
                  </div>

                  <div className="space-y-4 py-4 border-t border-[#F2F4F7]">
                     <label className="block text-[10px] font-black text-[#667085] uppercase tracking-widest ml-1">New Secure Password</label>
                     <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={18} />
                        <input 
                           type={showNew ? "text" : "password"} 
                           placeholder="••••••••" 
                           className="w-full pl-12 pr-12 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 text-sm font-bold transition-all" 
                        />
                        <button 
                           type="button"
                           onClick={() => setShowNew(!showNew)}
                           className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#101828] transition-colors"
                        >
                           {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <label className="block text-[10px] font-black text-[#667085] uppercase tracking-widest ml-1">Confirm New Password</label>
                     <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={18} />
                        <input 
                           type={showConfirm ? "text" : "password"} 
                           placeholder="••••••••" 
                           className="w-full pl-12 pr-12 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 text-sm font-bold transition-all" 
                        />
                        <button 
                           type="button"
                           onClick={() => setShowConfirm(!showConfirm)}
                           className="absolute right-4 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#101828] transition-colors"
                        >
                           {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                     </div>
                  </div>

                  <div className="pt-8">
                     <button className="w-full py-5 bg-[#101828] text-white font-black uppercase tracking-[2px] text-sm rounded-2xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 group">
                        <CheckCircle size={18} className="text-primary group-hover:scale-110 transition-transform" />
                        Save New Access Credentials
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
