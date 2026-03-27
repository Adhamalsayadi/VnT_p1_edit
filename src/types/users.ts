export interface SignUpFormData {
  userType: "Client" | "Supplier";
  email: string;
  password: string;
  ownerName: string;
  profilePhoto: File | null;

  companyName: string;
  crNumber: string;
  experienceYears: string;
  location: string;

  // Supplier Specific
  serviceScope: string;
  activityClassification: string;
  subCategories: string;

  // Custom "Other" inputs
  customActivity: string;
  customSubCategory: string;

  companyEmail: string;
  phoneNumber: string;
  websiteLink: string;
  
  // Contact Sections (Design matching)
  ownerSection: { name: string; tel: string; email: string };
  directorsSection: { name: string; tel: string; email: string };
  financialSection: { name: string; tel: string; email: string };
  commercialSection: { name: string; tel: string; email: string };
  afterHoursSection: { name: string; tel: string; email: string };
  qhseSection: { name: string; tel: string; email: string };

  companyProfileDoc: File | null;
  referralSource: string;
  agreedToTerms: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export interface ServiceItem {
  id?: string;
  label: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Client" | "Supplier" | "Admin" | "SuperAdmin" | "SubAdmin";
  phone?: string;
  avatar?: string;
  status?: "active" | "pending" | "inactive";
}

export interface Marketer extends User {
  role: "Admin"; // Or however marketer is defined
  clientsManaged?: string[];
}
