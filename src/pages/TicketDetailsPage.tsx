import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../services/apiClient";
import Layout from "../components/layout/Layout";

export default function TicketDetailsPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTicket() {
      try {
        const response = await apiClient.post(
          "/Services/Ticket/Ticket/Retrieve",
          { EntityId: Number(id) }
        );

        setTicket(response.data.Entity);
      } catch (error) {
        console.error("Error loading ticket:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTicket();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!ticket) return <div>Ticket not found</div>;

  return (
    <Layout>
      <div>
        <h2>Ticket Details</h2>

        <table style={styles.table}>
          <tbody>
            {Object.entries(ticket).map(([key, value]) => (
              <tr key={key}>
                <td style={styles.key}>{key}</td>
                <td style={styles.value}>
                  {formatValue(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

function formatValue(value: any) {
  if (value === null) return "null";

  if (typeof value === "object")
    return JSON.stringify(value, null, 2);

  return value.toString();
}

const styles: Record<string, React.CSSProperties> = {
  table: {
    borderCollapse: "collapse",
    width: "100%"
  },
  key: {
    border: "1px solid #ccc",
    padding: "8px",
    fontWeight: "bold",
    width: "30%"
  },
  value: {
    border: "1px solid #ccc",
    padding: "8px"
  }
};