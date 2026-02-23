import TicketCard from "./TicketCard";

export default function TicketList({ tickets }: any) {
  return (
    <div>
      {tickets.map((t: any) => (
        <TicketCard key={t.TicketId} ticket={t} />
      ))}
    </div>
  );
}