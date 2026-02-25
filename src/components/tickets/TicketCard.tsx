import { Link } from "react-router-dom";
import '../../App.css'

export default function TicketCard({ ticket }: any) {
  return (
    <div className="card">
      <h3>Description: {ticket.Description}</h3>
      <p>StatusId: {ticket.StatusId }</p>
      <Link to={`/tickets/${ticket.Id}`}>
        View Details
      </Link>
      <br />
    </div>
  );
}