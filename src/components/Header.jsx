import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/">
          <h2 style={{ color: "white" }}>🐾 PetCare</h2>
        </Link>
        <nav>
          <Link href="/pets" className="nav-link">Pets</Link>
          <Link href="/pets/" className="nav-link">Cadastrar Pet</Link>
          <Link href="/sobre" className="nav-link">Sobre Mim</Link>
        </nav>
      </div>
    </header>
  );
}
