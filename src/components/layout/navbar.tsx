"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LocationEdit, Menu, X } from "lucide-react";
import CountrySelector from "@/components/shared/CountryModal";
import Button from "@/components/ui/button";
import { NAV_LINKS } from "@/config/public";

export default function Navbar() {
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Saudi Arabia");

  const pathname = usePathname();

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };

  const handleFinalSave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("country", selectedCountry);
    }
    setIsCountryModalOpen(false);
  };

  return (
    <nav className="border-b-2 border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href={"/"} className="flex items-center">
              <Image
                src="/VT.png"
                alt="Logo"
                width={60}
                height={50}
                className="w-auto h-12"
              />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`capitalize font-medium transition-colors duration-300 pb-1 ${
                      isActive
                        ? "text-primary border-b-4 border-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" className="whitespace-nowrap">
                <Button className="h-10 px-4 capitalize">Post enquiry</Button>
              </Link>
              <Link href="/login" className="whitespace-nowrap">
                <Button
                  variant="ghost"
                  className="h-10 capitalize text-[#001f54]"
                >
                  Log in
                </Button>
              </Link>
            </div>

            <Link href="/signup" className="hidden sm:block whitespace-nowrap">
              <Button className="h-10 px-4 capitalize bg-[#f0d05c] hover:bg-[#e0c04c] text-black border-none">
                Sign up
              </Button>
            </Link>

            <button
              onClick={() => setIsCountryModalOpen(true)}
              className="bg-[#f0d05c] h-10 w-10 md:h-11 md:w-11 rounded-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              aria-label="Open country selector"
            >
              <LocationEdit size={22} />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-semibold block capitalize ${
                    pathname === link.href ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full h-12 text-lg">Post enquiry</Button>
            </Link>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full h-12 text-[#001f54]">
                  Log in
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full h-12 bg-[#f0d05c] text-black border-none">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CountrySelector
        isOpen={isCountryModalOpen}
        onClose={handleFinalSave}
        selectedCountry={selectedCountry}
        onSelect={handleCountrySelect}
        onSave={handleFinalSave}
      />
    </nav>
  );
}
