import { Link } from "react-router-dom";

export default function TicketCard({ ticket }: any) {
  return (
    <div className="card">
      <h3>{ticket.Title}</h3>
      <p>Status: {ticket.Status}</p>
      <Link to={`/tickets/${ticket.TicketId}`}>
        View Details
      </Link>
    </div>
  );
}