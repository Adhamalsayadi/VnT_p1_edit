// import { NextRequest, NextResponse } from "next/server";
// import { mockEnquiries } from "@/lib/api/enquiries/enquiries";
// import { AnyEnquiry } from "@/types/enquiries";

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const search = searchParams.get("search")?.trim().toLowerCase() || "";
//   const category = searchParams.get("category")?.trim().toLowerCase() || "";
//   const subCategory =
//     searchParams.get("subCategory")?.trim().toLowerCase() || "";
//   const source = searchParams.get("source") || "";
//   const time = searchParams.get("time")?.toLowerCase() || "";
//   const clientRate = searchParams.get("clientRate") || "";
//   const vtRate = searchParams.get("vtRate") || "";

//   const normalize = (s: string) => s.replace(/\s+/g, "").toLowerCase();

//   const filtered = mockEnquiries.filter((item: AnyEnquiry) => {
//     // Search should look at title, category, AND subcategory
//     const searchMatch = search
//       ? item.title.toLowerCase().includes(search) ||
//         normalize(item.category).includes(normalize(search)) ||
//         normalize(item.subCategory).includes(normalize(search))
//       : true;

//     // RULE: Category filter applies if:
//     // 1. It came from the dropdown (source=dropdown)
//     // 2. OR a Subcategory is present
//     const categoryMatch =
//       (subCategory || source === "dropdown") && category && category !== "all"
//         ? normalize(item.category) === normalize(category)
//         : true;

//     const subCategoryMatch = subCategory
//       ? normalize(item.subCategory) === normalize(subCategory)
//       : true;

//     const timeMatch = time ? item.time.toLowerCase() === time : true;
//     const clientRateMatch = clientRate
//       ? item.clientRate >= Number(clientRate)
//       : true;
//     const vtRateMatch = vtRate ? item.vtRate >= Number(vtRate) : true;

//     return (
//       searchMatch &&
//       categoryMatch &&
//       subCategoryMatch &&
//       timeMatch &&
//       clientRateMatch &&
//       vtRateMatch
//     );
//   });

//   return NextResponse.json({
//     data: filtered,
//     total: filtered.length,
//   });
// }
