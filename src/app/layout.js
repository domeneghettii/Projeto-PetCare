import "./globals.css";

export const metadata = {
    title: "PetCare 🐾",
    description: "Sistema de Cadastro de Pets",
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

