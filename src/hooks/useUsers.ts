import { useState, useEffect, useCallback } from "react";
import { User, Marketer } from "@/types//users";
import { userService } from "@/services/userService";

export function useUsers(role: "Client" | "Supplier" | "Marketer") {
  const [users, setUsers] = useState<User[] | Marketer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      let data: User[] | Marketer[] = [];

      if (role === "Client") data = await userService.getClients();
      else if (role === "Supplier") data = await userService.getSuppliers();
      else if (role === "Marketer") data = await userService.getMarketers();

      setUsers(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to fetch users");
      } else {
        setError("Failed to fetch users");
      }
    } finally {
      setLoading(false);
    }
  }, [role]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await userService.updateStatus(id, status);
      setUsers(
        (prev) =>
          prev.map((u) =>
            u.id === id
              ? { ...u, status: status as unknown as User["status"] }
              : u
          ) as unknown as (User | Marketer)[]
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to update status");
      } else {
        setError("Failed to update status");
      }
    }
  };

  return { users, loading, error, refetch: fetchUsers, updateStatus };
}
