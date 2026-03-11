"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50/50 backdrop-blur-sm fixed inset-0 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-black">
            VT
          </div>
        </div>
        <p className="text-gray-500 font-medium animate-pulse">Loading platform...</p>
      </div>
    </div>
  );
}
