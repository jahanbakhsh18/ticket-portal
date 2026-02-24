import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <Link to="/">Ticketing Portal</Link>
            </div>

            {user && (
                <nav style={styles.nav}>
                    <NavLink to="/" style={styles.link}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/tickets" style={styles.link}>
                        Tickets
                    </NavLink>
                </nav>
            )}

            <div>
                {user ? (
                    <>
                        <span style={{ marginRight: 10 }}>
                            Hello, {user.Username}
                        </span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </header>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1e293b",
        color: "white"
    },
    nav: {
        display: "flex",
        gap: "20px"
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
    logo: {
        fontWeight: "bold"
    }
};