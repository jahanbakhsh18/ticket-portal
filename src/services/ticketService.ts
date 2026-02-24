import { apiClient } from "./apiClient";

export const ticketService = {
  list: () =>
    apiClient.post("/Services/Ticket/Ticket/List", {}),

  retrieve: (id: number) =>
    apiClient.post("/Services/Ticket/Ticket/Retrieve", { EntityId: id }),

  create: (entity: any) =>
    apiClient.post("/Services/Ticket/Ticket/Create", { Entity: entity })
};