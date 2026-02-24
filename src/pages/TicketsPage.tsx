import { useEffect, useState } from "react";
import { ticketService } from "../services/ticketService";
import TicketList from "../components/tickets/TicketList";
import Layout from "../components/layout/Layout";

export default function TicketsPage() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ticketService.list()
      .then(res => {
        setTickets(res.data.Entities);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div>
        <h1>Tickets</h1>
        <TicketList tickets={tickets} />
      </div>
    </Layout>
  );
}