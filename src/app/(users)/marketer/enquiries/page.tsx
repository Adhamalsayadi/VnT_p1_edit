"use client";

import Link from "next/link";
import Sidebar from "../../client/Sidebar/Sidebar";
import Header from "../../client/header";
import { Eye, Edit3, Trash2, EyeOff } from "lucide-react";

const mockEnquiries = [
  { id: 1, title: "Oil Rig Maintenance", client: "Saudi Aramco", category: "Services", subCategory: "Maintenance", status: "active" },
  { id: 2, title: "Drilling Equipment", client: "ADNOC", category: "Products", subCategory: "Drilling", status: "pending" },
  { id: 3, title: "Slickline Operations", client: "BP", category: "Services", subCategory: "Slickline", status: "active" },
];

export default function MarketerEnquiriesPage() {
  const handleAction = (id: number, action: string) => {
    alert(`${action} action on enquiry ${id}`);
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
              &gt; <span className="text-[#98A2B3]">Enquiries</span>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-[28px] font-bold text-[#101828]">All Enquiries</h1>
            </div>

            <div className="bg-white rounded-2xl border border-[#EAECF0] overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#EAECF0]">
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">#</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Title</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Client</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Category</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="text-right px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {mockEnquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-5 text-sm text-[#667085]">{enq.id}</td>
                      <td className="px-6 py-5 text-sm font-semibold text-[#101828]">{enq.title}</td>
                      <td className="px-6 py-5 text-sm text-[#667085]">{enq.client}</td>
                      <td className="px-6 py-5 text-sm text-[#667085]">{enq.category}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                          enq.status === "pending" ? "bg-[#FEF3F2] text-[#B42318]" : "bg-[#ECFDF3] text-[#027A48]"
                        }`}>
                          {enq.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-3 text-[#667085]">
                          <button onClick={() => handleAction(enq.id, 'View')} className="p-1 hover:text-primary transition-colors"><Eye size={18} /></button>
                          <button onClick={() => handleAction(enq.id, 'Edit')} className="p-1 hover:text-primary transition-colors"><Edit3 size={18} /></button>
                          <button onClick={() => handleAction(enq.id, 'Delete')} className="p-1 hover:text-[#B42318] transition-colors"><Trash2 size={18} /></button>
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
