import { User } from "@/types/users";

export interface LoginResponse {
  success: boolean;
  message: string;
  role?: "Client" | "Supplier" | "Admin" | "SuperAdmin" | "SubAdmin";
  user?: User;
}

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  // Simulate API Delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // --- MOCK LOGIC ---
  if (email === "super@vnt.com" && password === "super") {
    return {
      success: true,
      message: "Login successful",
      role: "SuperAdmin",
      user: { id: "super-1", name: "Super Admin", email, role: "SuperAdmin" },
    };
  }

  if (email === "vtm@vnt.com" && password === "vtm") {
    return {
      success: true,
      message: "Login successful",
      role: "SubAdmin",
      user: { id: "vtm-1", name: "VTM Controller", email, role: "SubAdmin" },
    };
  }

  if (email === "mock@m.com" && password === "mock") {
    return {
      success: true,
      message: "Login successful",
      role: "Client",
      user: { id: "1", name: "mock Client", email, role: "Client", phone: "" },
    };
  }

  if (email === "mocks@m.com" && password === "mock") {
    return {
      success: true,
      message: "Login successful",
      role: "Supplier",
      user: {
        id: "2",
        name: "mock Supplier",
        email,
        role: "Supplier",
        phone: "",
      },
    };
  }

  if (email === "mockm@m.com" && password === "mock") {
    return {
      success: true,
      message: "Login successful",
      role: "Admin",
      user: {
        id: "3",
        name: "mock Marketer",
        email,
        role: "Admin",
        phone: "",
      },
    };
  }

  return { success: false, message: "Invalid email or password" };
}
