"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="card" style={{ textAlign: "center" }}>
        <h1 className="title">Bem-vinda ao PetCare 🐶🐱</h1>

        <p style={{ maxWidth: 780, margin: "12px auto 18px", color: "#4b5563", fontSize: 16 }}>
          Um cantinho para cuidar dos seus peludinhos com amor. Cadastre, edite e
          consulte informações importantes de forma rápida e afetuosa.
        </p>

        <p style={{ color: "#6b7280", maxWidth: 760, margin: "0 auto" }}>
          PetCare organiza tudo para que você passe menos tempo no app e mais tempo ao lado de quem você ama.
        </p>

        <p style={{ marginTop: 18, color: "#6b7280" }}>
          Pronta para começar? Use a navegação no topo para ver a lista de pets ou cadastrar um novo.
        </p>
      </section>
    </>
  );
}