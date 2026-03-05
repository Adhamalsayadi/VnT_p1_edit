import { Enquiry } from "@/types/enquiries";

interface FetchEnquiriesParams {
  search?: string;
  category?: string;
  subCategory?: string;
  time?: string;
  clientRate?: string;
  vtRate?: string;
  page?: number;
  pageSize?: number;
}

const mockEnquiries: Enquiry[] = [
  {
    id: "1",
    title: "Cleaning tools",
    category: "Services",
    subCategory: "sub 1",
    time: "today",
    clientRate: 5,
    vtRate: 4,
    image: "/enquiries.png",
  },
  {
    id: "2",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "3",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "4",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "5",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "6",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "7",
    title: "Machine for sale",
    category: "all",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "8",
    title: "Machine for sale",
    category: "Services",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "9",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "today",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "10",
    title: "Machine for sale",
    category: "Power Man",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "11",
    title: "Machine for sale",
    category: "Rental",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "12",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "today",
    clientRate: 3,
    vtRate: 5,
    image: "/enquiries.png",
  },
  {
    id: "13",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "this weak",
    clientRate: 3,
    vtRate: 3,
    image: "/enquiries.png",
  },
  {
    id: "14",
    title: "Machine for sale",
    category: "Products",
    subCategory: "sub 2",
    time: "this month",
    clientRate: 1,
    vtRate: 5,
    image: "/enquiries.png",
  },
];

export async function fetchEnquiries(
  params: FetchEnquiriesParams
): Promise<{ data: Enquiry[]; total: number }> {
  const filtered = mockEnquiries.filter((item) => {
    return (
      (params.search
        ? item.title.toLowerCase().includes(params.search.toLowerCase()) ||
          item.category.toLowerCase().includes(params.search.toLowerCase())
        : true) &&
      (params.category
        ? item.category.toLowerCase() === params.category.toLowerCase()
        : true) &&
      (params.subCategory
        ? item.subCategory.toLowerCase() === params.subCategory.toLowerCase()
        : true) &&
      (params.time
        ? item.time.toLowerCase() === params.time.toLowerCase()
        : true) &&
      (params.clientRate
        ? item.clientRate >= Number(params.clientRate)
        : true) &&
      (params.vtRate ? item.vtRate >= Number(params.vtRate) : true)
    );
  });

  const page = params.page || 1;
  const pageSize = params.pageSize || 10;
  const start = (page - 1) * pageSize;
  const paginatedData = filtered.slice(start, start + pageSize);

  return {
    data: paginatedData,
    total: filtered.length,
  };
}
