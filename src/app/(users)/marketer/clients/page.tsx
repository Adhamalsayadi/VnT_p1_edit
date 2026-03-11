"use client";

import Link from "next/link";
import Sidebar from "../../client/Sidebar/Sidebar";
import Header from "../../client/header";
import { Eye, Edit3, Trash2, Mail, Phone } from "lucide-react";

const mockClients = [
  { id: 1, name: "Saudi Aramco", email: "procurement@aramco.com", phone: "+966 13 872 0115", company: "Oil & Gas", status: "active" },
  { id: 2, name: "ADNOC", email: "info@adnoc.ae", phone: "+971 2 602 0000", company: "Energy", status: "active" },
  { id: 3, name: "BP PLC", email: "bp-procure@bp.com", phone: "+44 20 7496 4000", company: "Oil", status: "pending" },
];

export default function MarketerClientsPage() {
  const handleAction = (id: number, action: string) => {
    alert(`${action} action on client ${id}`);
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
              &gt; <span className="text-[#98A2B3]">Clients</span>
            </div>

            <h1 className="text-[28px] font-bold text-[#101828]">Client Directory</h1>

            <div className="bg-white rounded-2xl border border-[#EAECF0] overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#EAECF0]">
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Client Name</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Contact</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Industry</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="text-right px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {mockClients.map((client) => (
                    <tr key={client.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-5">
                         <div className="font-semibold text-[#101828] text-sm">{client.name}</div>
                         <div className="text-xs text-[#667085]">{client.company}</div>
                      </td>
                      <td className="px-6 py-5">
                         <div className="flex items-center gap-2 text-sm text-[#475467] mb-1">
                            <Mail size={14} className="text-[#98A2B3]" />
                            {client.email}
                         </div>
                         <div className="flex items-center gap-2 text-xs text-[#667085]">
                            <Phone size={14} className="text-[#98A2B3]" />
                            {client.phone}
                         </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-[#667085]">{client.company}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                          client.status === "pending" ? "bg-[#F2F4F7] text-[#344054]" : "bg-[#ECFDF3] text-[#027A48]"
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-3 text-[#667085]">
                          <button onClick={() => handleAction(client.id, 'View')} className="p-1 hover:text-primary transition-colors"><Eye size={18} /></button>
                          <button onClick={() => handleAction(client.id, 'Edit')} className="p-1 hover:text-primary transition-colors"><Edit3 size={18} /></button>
                          <button onClick={() => handleAction(client.id, 'Delete')} className="p-1 hover:text-[#B42318] transition-colors"><Trash2 size={18} /></button>
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
