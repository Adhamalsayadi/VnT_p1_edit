import { User, Marketer } from "@/types/users";

export const userService = {
  getClients: async (): Promise<User[]> => {
    return [
      { id: "1", name: "Client One", email: "client1@example.com", role: "Client", status: "active" },
      { id: "2", name: "Client Two", email: "client2@example.com", role: "Client", status: "pending" },
    ];
  },

  getSuppliers: async (): Promise<User[]> => {
    return [
      { id: "1", name: "Supplier One", email: "supplier1@example.com", role: "Supplier", status: "active" },
    ];
  },

  getMarketers: async (): Promise<Marketer[]> => {
    return [];
  },

  updateStatus: async (id: string, status: string): Promise<void> => {
    console.log(`Updating status of user ${id} to ${status}`);
  },
};
