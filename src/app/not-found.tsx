import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="relative mb-8">
        <h1 className="text-[120px] font-black text-[#F2F4F7] leading-none">404</h1>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-[#101828] whitespace-nowrap">
          Oops! Page not found
        </p>
      </div>
      
      <p className="text-[#667085] text-lg max-w-md mb-10">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      <Link href="/">
        <Button size="lg" className="bg-[#f0d05c] hover:bg-[#e0c04c] text-black border-none px-8">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
