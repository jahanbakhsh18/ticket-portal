import { createBrowserRouter } from "react-router-dom";
import App from './App'
import DashboardPage from "../pages/DashboardPage";
import TicketsPage from "../pages/TicketsPage";
import TicketDetailsPage from "../pages/TicketDetailsPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "/tickets", element: <TicketsPage /> },
          { path: "/tickets/:id", element: <TicketDetailsPage /> }
        ]
      }
    ]
  }
]);