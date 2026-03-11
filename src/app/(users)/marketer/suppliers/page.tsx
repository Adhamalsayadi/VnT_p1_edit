"use client";

import Link from "next/link";
import Sidebar from "../../client/Sidebar/Sidebar";
import Header from "../../client/header";
import { Eye, Edit3, Trash2, Mail, Globe } from "lucide-react";

const mockSuppliers = [
  { id: 1, name: "Technical Services Co.", email: "info@techservices.com", website: "www.techservices.com", category: "Maintenance", status: "verified" },
  { id: 2, name: "Global Drillers Ltd", email: "sales@globaldrilling.com", website: "www.globaldrilling.com", category: "Equipment", status: "pending" },
  { id: 3, name: "OilTech Solutions", email: "contact@oiltech.io", website: "www.oiltech.io", category: "Consultancy", status: "verified" },
];

export default function MarketerSuppliersPage() {
  const handleAction = (id: number, action: string) => {
    alert(`${action} action on supplier ${id}`);
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar role="Marketer" />
      <div className="flex-1 flex flex-col">
        <Header role="Marketer" />

        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="flex flex-col gap-8">
            <div className="text-[#667085] text-sm font-medium">
              <Link href="/users/marketer" className="hover:text-black transition-colors">
                Dashboard
              </Link>{" "}
              &gt; <span className="text-[#98A2B3]">Suppliers</span>
            </div>

            <h1 className="text-[28px] font-bold text-[#101828]">Supplier Network</h1>

            <div className="bg-white rounded-2xl border border-[#EAECF0] overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#EAECF0]">
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Supplier</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Contact / Web</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Category</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="text-right px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {mockSuppliers.map((sup) => (
                    <tr key={sup.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-5">
                         <div className="font-semibold text-[#101828] text-sm">{sup.name}</div>
                      </td>
                      <td className="px-6 py-5">
                         <div className="flex items-center gap-2 text-sm text-[#475467] mb-1">
                            <Mail size={14} className="text-[#98A2B3]" />
                            {sup.email}
                         </div>
                         <div className="flex items-center gap-2 text-xs text-blue-600 hover:underline">
                            <Globe size={14} className="text-[#98A2B3]" />
                            <a href={`https://${sup.website}`} target="_blank" rel="noopener noreferrer">{sup.website}</a>
                         </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-[#667085]">{sup.category}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                          sup.status === "pending" ? "bg-[#FEF3F2] text-[#B42318]" : "bg-[#ECFDF3] text-[#027A48]"
                        }`}>
                          {sup.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-3 text-[#667085]">
                          <button onClick={() => handleAction(sup.id, 'View')} className="p-1 hover:text-primary transition-colors"><Eye size={18} /></button>
                          <button onClick={() => handleAction(sup.id, 'Edit')} className="p-1 hover:text-primary transition-colors"><Edit3 size={18} /></button>
                          <button onClick={() => handleAction(sup.id, 'Delete')} className="p-1 hover:text-[#B42318] transition-colors"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
