import React from "react";
import { UploadCloud } from "lucide-react";
import Button from "./button";

interface FileUploadProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  onChange,
  required,
  error,
}) => (
  <div className="flex flex-col">
    <label className="block text-base md:text-lg font-semibold mb-2 text-[#333]">
      {label} {required && <span className="text-[#ff4d4f]">*</span>}
    </label>
    <div className="border border-dashed border-[#d9d9d9] rounded-lg p-6 md:p-8 text-center bg-[#ebeef5] relative hover:border-primary transition-colors">
      <UploadCloud
        size={48}
        strokeWidth={1.5}
        className="mx-auto text-gray-400 mb-3"
      />
      <p className="text-sm text-[#333] font-semibold">
        Drag & drop or{" "}
        <span className="text-primary underline cursor-pointer">upload</span>
      </p>
      <p className="text-[10px] md:text-[11px] text-[#999] mt-2">
        JPEG, PNG, PDF
      </p>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
      <div className="mt-4 inline-block pointer-events-none">
        <Button variant="primary" size="sm">
          Upload
        </Button>
      </div>
    </div>
    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
  </div>
);
