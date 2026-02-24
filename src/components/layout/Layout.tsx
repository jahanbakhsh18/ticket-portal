import Header from "./Header";

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main style={{ padding: 20 }}>
                {children}
            </main>
        </>
    );
}