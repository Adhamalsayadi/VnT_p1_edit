import { useState, useRef, useEffect } from "react";
import { Search, User, LogOut, ShieldCheck, UserCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderProps {
  role: "Client" | "Supplier" | "Marketer";
}

export default function Header({ role }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-[80px] bg-white border-b border-[#EAECF0] flex items-center justify-between px-6 md:px-10 relative z-50">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-xl mx-auto">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-12 pr-4 py-2.5 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 ml-4">
        {/* Role Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#F2F4F7] rounded-full">
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              role === "Client"
                ? "bg-blue-500"
                : role === "Supplier"
                ? "bg-green-500"
                : "bg-primary"
            )}
          ></div>
          <span className="text-xs font-bold text-[#344054] uppercase tracking-wider">
            {role}
          </span>
        </div>

        {/* User Avatar Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#EAECF0] flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary transition-all overflow-hidden border-2 border-transparent"
          >
            <User size={22} className="text-[#667085]" />
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#EAECF0] py-3 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
              <div className="px-5 py-4 border-b border-[#F2F4F7] mb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-black">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#101828] truncate">
                      mock user
                    </p>
                    <p className="text-xs text-[#667085] truncate">
                      mock@m.com
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={
                  role === "Client"
                    ? "/client/profile"
                    : role === "Supplier"
                    ? "/supplier/profile"
                    : "/marketer/profile"
                }
                className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-[#344054] hover:bg-[#F9FAFB] transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                  <UserCircle size={18} />
                </div>
                Manage Profile
              </Link>

              <Link
                href={
                  role === "Client"
                    ? "/client/reset-password"
                    : role === "Supplier"
                    ? "/supplier/reset-password"
                    : "/marketer/reset-password"
                }
                className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-[#344054] hover:bg-[#F9FAFB] transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className="p-1.5 bg-orange-50 text-orange-600 rounded-lg">
                  <ShieldCheck size={18} />
                </div>
                Security Settings
              </Link>

              <div className="my-2 border-t border-[#F2F4F7]"></div>

              <button
                className="w-full flex items-center gap-3 px-5 py-3 text-sm font-bold text-[#B42318] hover:bg-red-50 transition-colors"
                onClick={() => {
                  setIsDropdownOpen(false);
                  window.location.href = "/";
                }}
              >
                <div className="p-1.5 bg-red-50 text-red-600 rounded-lg">
                  <LogOut size={18} />
                </div>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
