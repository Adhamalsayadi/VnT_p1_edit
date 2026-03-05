export interface EnquiryM {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  time: string;
  clientRate: number;
  vtRate: number;
  image: string;
  adStatus?: string;
  paymentStatus?: string;
  startDate?: string;
  postDate?: string;
  purpose?: string;
  expiryDate?: string;
  qualification?: string;
  standard?: string;
  description?: string;
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
}

export interface EnquiryFilters {
  search?: string;
  category?: string;
  subCategory?: string;
  time?: string;
  clientRate?: string;
  vtRate?: string;
}
