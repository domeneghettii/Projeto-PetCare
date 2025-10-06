import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "PetCare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <div className="container">
            <h2>
              <span style={{ fontSize: 20, marginRight: 8 }}>🐾</span>
              <span style={{ textDecoration: "underline" }}>PetCare</span>
            </h2>

            <nav>
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/pets" className="nav-link">Pets Recentes</Link>
              <Link href="/pets/novo" className="nav-link">Cadastrar Pet</Link>
              <Link href="/sobre" className="nav-link">Sobre Mim</Link>
              <Link href="/pets/contato" className="nav-link">Contato</Link>  
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer>
          <div className="container center" style={{ paddingTop: 18, paddingBottom: 18 }}>
            © {new Date().getFullYear()} PetCare — Feito por Luana Domeneghetti
          </div>
        </footer>
      </body>
    </html>
  );
}