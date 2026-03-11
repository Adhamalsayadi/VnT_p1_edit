"use client";

import Link from "next/link";
import Sidebar from "../../../client/Sidebar/Sidebar";
import Header from "../../../client/header";
import Image from "next/image";

export default function SupplierEnquiryDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar role="Supplier" />
      <div className="flex-1 flex flex-col">
        <Header role="Supplier" />

        <main className="flex-1 p-10 overflow-auto">
          <div className="flex flex-col gap-8 max-w-5xl">
            <div className="text-[#667085] text-sm font-medium">
              <Link href="/users/supplier" className="hover:text-black transition-colors">
                Dashboard
              </Link>{" "}
              &gt;{" "}
              <Link href="/users/supplier/enquiries" className="hover:text-black transition-colors">
                enquires
              </Link>{" "}
              &gt; <span className="text-[#98A2B3]">First Enquiry</span>
            </div>

            <h1 className="text-[28px] font-bold text-[#101828]">Enquire Details</h1>

            <div className="bg-white rounded-2xl border border-[#EAECF0] p-10 shadow-sm flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#667085] uppercase tracking-wider">Title</span>
                  <span className="text-lg font-bold text-[#101828]">Drilling Rig Maintenance</span>
                </div>

                <div className="flex flex-col gap-2">
                   <span className="text-sm font-medium text-[#667085] uppercase tracking-wider">Request Type</span>
                   <div>
                    <span className="bg-[#ECFDF3] text-[#027A48] px-3 py-1 rounded-full text-sm font-bold capitalize">
                      Services
                    </span>
                   </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#667085] uppercase tracking-wider">Required Date</span>
                  <span className="text-lg font-bold text-[#101828]">2024-05-20</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#667085] uppercase tracking-wider">Quantity</span>
                  <span className="text-lg font-bold text-[#101828]">1</span>
                </div>

                <div className="md:col-span-2 flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#667085] uppercase tracking-wider">Description</span>
                  <p className="text-[#475467] leading-relaxed">
                    Looking for professional maintenance services for our offshore drilling rig. 
                    The scope includes mechanical inspection, hydraulic system check, and general cleanup.
                  </p>
                </div>

                <div className="md:col-span-2 flex flex-col gap-4">
                  <span className="text-sm font-medium text-[#667085] uppercase tracking-wider">Images</span>
                  <div className="w-32 h-32 rounded-xl border border-[#EAECF0] overflow-hidden bg-gray-50 flex items-center justify-center relative">
                    <span className="text-xs text-[#98A2B3]">No Image</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 border-t border-[#EAECF0] pt-8">
                <Link href="/users/supplier/enquiries" className="px-6 py-3 border border-[#D0D5DD] rounded-xl font-bold text-[#344054] hover:bg-gray-50 transition-all">
                  Back
                </Link>
                <button className="px-10 py-3 bg-black text-white rounded-xl font-bold hover:opacity-80 transition-all shadow-lg active:scale-95">
                  Make Offer
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
