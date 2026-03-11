import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  error,
  required,
  className,
  ...props
}) => (
  <div className="flex flex-col">
    <label className="block text-base md:text-lg font-semibold mb-2 text-[#333]">
      {label} {required && <span className="text-[#ff4d4f]">*</span>}
    </label>
    <input
      name={name}
      className={cn(
        "w-full p-4 bg-[#ebeef5] border-none rounded-lg outline-none transition-all focus:ring-2 focus:ring-primary/50",
        error && "ring-2 ring-red-500",
        className
      )}
      {...props}
    />
    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
  </div>
);
