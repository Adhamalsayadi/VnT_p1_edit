import axios from "axios";
import { SignUpFormData } from "@/types/users";

const api = axios.create({
  baseURL: "", // Set your base URL here if needed (e.g., process.env.NEXT_PUBLIC_API_URL)
  headers: { "Content-Type": "application/json" },
});

// Set to true when you have a real backend ready
const Python_ap = false;

export async function registerUser(
  formData: SignUpFormData
): Promise<{ success: boolean; message: string }> {
  // 1. Prepare the payload (convert FormData to a format axios can send)
  // Note: If you are sending files, you usually send a FormData object directly.
  const payload = new FormData();

  Object.entries(formData).forEach(([key, value]) => {
    if (value instanceof File) {
      payload.append(key, value);
    } else if (typeof value === "boolean") {
      payload.append(key, String(value));
    } else if (value) {
      payload.append(key, value as string);
    }
  });

  // 2. Mock Implementation (Matches your pattern)
  if (!Python_ap) {
    console.log("--- [MOCK] Registration Data ---");

    // Log the payload contents to verify
    // Note: FormData needs to be iterated to be seen in console
    for (let [key, value] of payload.entries()) {
      if (value instanceof File) {
        console.log(`${key}: [File] ${value.name}`);
      } else {
        console.log(`${key}:`, value);
      }
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Return mock success
    return { success: true, message: "User registered successfully (Mock)" };
  }

  // 3. Real Implementation (Axios)
  try {
    const response = await api.post("/api/v1/auth/register", payload, {
      headers: {
        "Content-Type": "multipart/form-data", // Important for file uploads
      },
    });

    return { success: true, message: response.data.message };
  } catch (error) {
    console.error("Axios Registration Error:", error);
    return { success: false, message: "Registration failed" };
  }
}
