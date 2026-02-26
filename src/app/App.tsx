import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom"

export default function App() {
    return (
        <main style={{ padding: "20px" }}>
            <Toaster position="top-center" />
            <Outlet />
        </main>
    );
}