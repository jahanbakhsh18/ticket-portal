import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import TicketsPage from "../pages/TicketsPage";
import TicketDetailsPage from "../pages/TicketDetailsPage";

export const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/tickets", element: <TicketsPage /> },
  { path: "/tickets/:id", element: <TicketDetailsPage /> }
]);