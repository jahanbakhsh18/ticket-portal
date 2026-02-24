import { Outlet } from "react-router-dom"

export default function App() {
    return (
        <main style={{ padding: "20px" }}>
            <Outlet />
        </main>
    );
}