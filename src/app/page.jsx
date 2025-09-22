"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPets } from "../lib/storage";

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets(getPets().slice(0, 3));
  }, []);

  return (
    <div className="card">
      <h1 className="title">Bem-vinda ao PetCare 🐾</h1>
      <p>Gerencie seus pets de forma simples e rápida.</p>

      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <Link href="/pets/novo">
          <button className="primary">Cadastrar Pet</button>
        </Link>
        <Link href="/pets">
          <button className="secondary">Ver Lista de Pets</button>
        </Link>
        <Link href="/sobre">
          <button className="secondary">Sobre Mim</button>
        </Link>
      </div>

      <h2 className="title" style={{ marginTop: "30px" }}>🐕 Pets Recentes</h2>
      <div className="pet-list">
        {pets.map((pet) => (
          <div key={pet.id} className="card pet-card">
            <img src={pet.photo || "/placeholder.png"} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.species} • {pet.age} anos</p>
            <Link href={`/pets/${pet.id}`}>
              <button className="secondary">Ver Detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
