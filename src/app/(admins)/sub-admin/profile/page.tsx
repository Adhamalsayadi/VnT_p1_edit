"use client";

import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminHeader from "@/components/shared/AdminHeader";
import { 
  User, 
  Mail, 
  Phone, 
  Camera, 
  Save, 
  ShieldCheck,
  ChevronRight,
  MapPin
} from "lucide-react";

export default function SubAdminProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <AdminSidebar role="SubAdmin" />
      <div className="flex-1 flex flex-col">
        <AdminHeader role="SubAdmin" />

        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[10px] font-black text-[#98A2B3] uppercase tracking-[3px]">
                <span className="text-[#101828]">VTM Admin</span>
                <ChevronRight size={12} />
                <span className="text-[#101828]">Personal Profile</span>
              </div>
              <h1 className="text-3xl font-black text-[#101828]">My Account</h1>
            </div>

            <div className="bg-white rounded-[40px] border border-[#EAECF0] shadow-sm overflow-hidden">
               <div className="h-32 bg-[#F2F4F7] relative">
                  <div className="absolute top-0 right-0 p-8 bg-primary/20 rounded-bl-[40px]">
                     <ShieldCheck size={24} className="text-[#101828]" />
                  </div>
                  <div className="absolute -bottom-12 left-10">
                     <div className="relative group">
                        <div className="w-24 h-24 rounded-3xl bg-[#101828] flex items-center justify-center text-primary font-black text-3xl border-4 border-white shadow-xl overflow-hidden">
                           V
                        </div>
                        <button className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl">
                           <Camera size={20} />
                        </button>
                     </div>
                  </div>
               </div>

               <div className="pt-20 px-10 pb-10">
                  <div className="flex justify-between items-start mb-10">
                     <div>
                        <h2 className="text-2xl font-black text-[#101828]">Compliance Controller</h2>
                        <p className="text-[#667085] font-medium italic">Regional Operations (Middle East)</p>
                     </div>
                     <button 
                        onClick={() => setIsEditing(!isEditing)}
                        className="px-6 py-2.5 bg-white border border-[#EAECF0] rounded-xl text-sm font-black uppercase tracking-widest text-[#101828] hover:bg-black hover:text-white transition-all shadow-sm"
                     >
                        {isEditing ? "Cancel Edit" : "Modify Details"}
                     </button>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                     <div className="space-y-4">
                        <label className="block text-[10px] font-black text-[#667085] uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative">
                           <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={18} />
                           <input 
                              type="text" 
                              defaultValue="Abdullah Controller" 
                              disabled={!isEditing}
                              className="w-full pl-12 pr-5 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 text-sm font-bold transition-all disabled:opacity-60" 
                           />
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="block text-[10px] font-black text-[#667085] uppercase tracking-widest ml-1">Work Email</label>
                        <div className="relative">
                           <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={18} />
                           <input 
                              type="email" 
                              defaultValue="vtm.support@vnt.com" 
                              disabled={!isEditing}
                              className="w-full pl-12 pr-5 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 text-sm font-bold transition-all disabled:opacity-60" 
                           />
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="block text-[10px] font-black text-[#667085] uppercase tracking-widest ml-1">Region Assignment</label>
                        <div className="relative">
                           <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={18} />
                           <input 
                              type="text" 
                              defaultValue="Middle East (KSA/UAE)" 
                              disabled={true}
                              className="w-full pl-12 pr-5 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl text-sm font-bold opacity-60" 
                           />
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="block text-[10px] font-black text-[#667085] uppercase tracking-widest ml-1">Staff ID</label>
                        <div className="relative">
                           <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                           <div className="w-full pl-12 pr-5 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl text-sm font-black text-[#101828] uppercase tracking-widest">
                              VTM-2026-X842
                           </div>
                        </div>
                     </div>

                     {isEditing && (
                        <div className="md:col-span-2 pt-6">
                           <button className="w-full py-5 bg-[#101828] text-white font-black uppercase tracking-[2px] text-sm rounded-2xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3">
                              <Save size={18} className="text-primary" />
                              Save Profile Updates
                           </button>
                        </div>
                     )}
                  </form>
               </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
