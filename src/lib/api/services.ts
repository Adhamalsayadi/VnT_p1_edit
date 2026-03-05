import type { ServiceCategory } from "@/types/service.types";

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return [
    {
      id: "services",
      label: "Services",
      icon: "/Services.png",
      subCategories: [
        "transportation",
        "down streams",
        "Mud services",
        "Exploration",
        "Machines",
        "welding services",
        "vapor blasting",
        "inspection & testing",
        "laiser engraving",
        "machines & equipment",
      ],
    },
    {
      id: "rental",
      label: "Rental",
      icon: "/for-rent.png",
      subCategories: [
        "Car Rental",
        "Equipment Rental",
        "Trucks",
        "Heavy Machines",
        "Trailers",
      ],
    },
    {
      id: "products",
      label: "Products",
      icon: "/received.png",
      subCategories: [
        "Office Supplies",
        "Safety Gear",
        "Construction Materials",
        "Pipes",
        "Valves",
      ],
    },
    {
      id: "manpower",
      label: "Man power",
      icon: "/power.png",
      subCategories: [
        "Engineers",
        "Drivers",
        "Technicians",
        "Laborers",
        "Supervisors",
      ],
    },
  ];
}
