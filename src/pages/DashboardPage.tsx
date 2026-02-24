
import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the ticketing portal...</p>
            <p style={{ color: "#df451e"}}>Hello, {user.Username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}