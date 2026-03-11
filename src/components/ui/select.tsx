import React from "react";
import { ChevronDown } from "lucide-react";
import { SelectOption } from "@/types/users";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: SelectOption[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  error,
  required,
  className,
  ...props
}) => (
  <div className="flex flex-col">
    <label className="block text-base md:text-lg font-semibold mb-2 text-[#333]">
      {label} {required && <span className="text-[#ff4d4f]">*</span>}
    </label>
    <div className="relative">
      <select
        name={name}
        className={cn(
          "w-full p-4 bg-[#ebeef5] border-none rounded-lg outline-none appearance-none cursor-pointer",
          error && "ring-2 ring-red-500",
          className
        )}
        {...props}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={20}
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
      />
    </div>
    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
  </div>
);
