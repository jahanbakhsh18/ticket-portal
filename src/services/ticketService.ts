import { apiClient } from "./apiClient";

export const ticketService = {
  list: () =>
    apiClient.post("/Ticket/Ticket/List", {}),

  retrieve: (id: number) =>
    apiClient.post("/Ticket/Ticket/Retrieve", { EntityId: id }),

  create: (entity: any) =>
    apiClient.post("/Ticket/Ticket/Create", { Entity: entity })
};