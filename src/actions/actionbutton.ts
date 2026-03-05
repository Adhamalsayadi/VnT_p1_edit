"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function submitRFQAction(formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const itemId = formData.get("itemId")?.toString(); // get your item id from the form

  if (!itemId) {
    throw new Error("No item ID provided");
  }

  console.log("Submitting RFQ for item:", itemId);

  // your server-side logic here

  return;
}
