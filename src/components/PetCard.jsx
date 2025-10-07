"use client";
import Link from "next/link";

export default function PetCard({ pet, tutor, onDelete }) {
  const fotoUrl = pet.foto ? `http://localhost:3000/uploads/${pet.foto}` : "/placeholder.png";
  return (
    <div className="card pet-card">
      <img
        src={fotoUrl}
        alt={pet.nome}
        className="pet-photo"
      />
      <div style={{ flex: 1 }}>
        <h3>{pet.nome}</h3>
        <p className="small">
          {pet.especie} • {pet.idade} anos • {pet.raca}
        </p>
        <p className="small">Tutor: {tutor?.nome} ({tutor?.telefone})</p>
        <p className="small">
          {pet.observacoes?.length > 60 ? pet.observacoes.slice(0, 60) + "..." : pet.observacoes}
        </p>
        <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
          <Link href={`/pets/${pet.id}`}>
            <button className="secondary">Ver</button>
          </Link>
          <Link href={`/pets/${pet.id}/editar`}>
            <button className="secondary">Editar</button>
          </Link>
          <button className="secondary" onClick={() => onDelete(pet.id)}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
