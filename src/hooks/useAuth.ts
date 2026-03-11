"use client";
import { useState, useEffect } from "react";
import { User } from "@/types/users";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock user for now to fix build errors
    setUser({
      id: "1",
      name: " m",
      email: "mock@m.com",
      role: "Client",
      phone: "+123456789",
    });
    setLoading(false);
  }, []);

  return { user, loading };
};
