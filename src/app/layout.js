import "./globals.css";

export const metadata = {
    title: "Sistema de Cadastro de Pets",
    description: "Projeto Final Individual",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}

