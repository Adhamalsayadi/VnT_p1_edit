"use client";

import Link from "next/link";
import Sidebar from "../../client/Sidebar/Sidebar";
import Header from "../../client/header";
import { Eye, Edit3, Trash2, TrendingUp, Calendar } from "lucide-react";

const mockDeals = [
  { id: 1, title: "Drilling Contract #42", client: "Saudi Aramco", supplier: "Technical Services", value: "$450,000", date: "2024-03-10", status: "closed" },
  { id: 2, title: "PPE Supply Chain", client: "ADNOC", supplier: "SafetyFirst UAE", value: "$85,000", date: "2024-03-11", status: "in-progress" },
  { id: 3, title: "Maintenance Phase 2", client: "BP", supplier: "OilTech Solutions", value: "$120,000", date: "2024-03-10", status: "closed" },
];

export default function MarketerDealsPage() {
  const handleAction = (id: number, action: string) => {
    alert(`${action} action on deal ${id}`);
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
              &gt; <span className="text-[#98A2B3]">Deals</span>
            </div>

            <h1 className="text-[28px] font-bold text-[#101828]">Deal Tracking</h1>

            <div className="bg-white rounded-2xl border border-[#EAECF0] overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#EAECF0]">
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Deal Details</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Parties</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Value</th>
                    <th className="text-left px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="text-right px-6 py-4 text-[#667085] text-xs font-bold uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {mockDeals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-5">
                         <div className="font-semibold text-[#101828] text-sm">{deal.title}</div>
                         <div className="flex items-center gap-1.5 text-xs text-[#667085] mt-1">
                            <Calendar size={12} />
                            {deal.date}
                         </div>
                      </td>
                      <td className="px-6 py-5">
                         <div className="text-sm text-[#101828] font-medium">{deal.client}</div>
                         <div className="text-xs text-[#667085]">via {deal.supplier}</div>
                      </td>
                      <td className="px-6 py-5">
                         <div className="flex items-center gap-1.5 text-sm font-bold text-[#101828]">
                            <TrendingUp size={14} className="text-green-600" />
                            {deal.value}
                         </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${
                          deal.status === "closed" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#EFF8FF] text-[#175CD3]"
                        }`}>
                          {deal.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-3 text-[#667085]">
                          <button onClick={() => handleAction(deal.id, 'View')} className="p-1 hover:text-primary transition-colors"><Eye size={18} /></button>
                          <button onClick={() => handleAction(deal.id, 'Edit')} className="p-1 hover:text-primary transition-colors"><Edit3 size={18} /></button>
                          <button onClick={() => handleAction(deal.id, 'Delete')} className="p-1 hover:text-[#B42318] transition-colors"><Trash2 size={18} /></button>
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
