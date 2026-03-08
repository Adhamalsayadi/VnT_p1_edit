export interface FreeEnquiry {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  time: string;
  clientRate: number;
  vtRate: number;
  image: string;
  type: "free";
}

export interface Enquiry {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  time: string;
  clientRate: number;
  vtRate: number;
  image: string;
  type: "paid";
}
export type AnyEnquiry = Enquiry | FreeEnquiry;

export interface EnquiryFilters {
  search?: string;
  category?: string;
  subCategory?: string;
  source?: string;
  time?: string;
  clientRate?: string;
  vtRate?: string;
}
