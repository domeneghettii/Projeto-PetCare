export default function Footer() {
  return (
    <footer
      style={{
        background: "#fff",
        borderTop: "1px solid #eee",
        padding: "12px 0",
        marginTop: "20px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.9rem",
          color: "#6b7280",
        }}
      >
        <span>© {new Date().getFullYear()} PetCare</span>
        <span>Feito com ❤️ por Domeneghetti</span>
      </div>
    </footer>
  );
}
