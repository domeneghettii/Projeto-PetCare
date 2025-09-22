"use client";
import Link from "next/link";

export default function PetCard({ pet, tutor, onDelete }) {
  return (
    <div className="card pet-card">
      <img
        src={pet.photo || "/placeholder.png"}
        alt={pet.name}
        className="pet-photo"
      />
      <div style={{ flex: 1 }}>
        <h3>{pet.name}</h3>
        <p className="small">
          {pet.species} • {pet.age} anos • {pet.breed}
        </p>
        <p className="small">Tutor: {tutor?.name} ({tutor?.phone})</p>
        <p className="small">
          {pet.notes?.length > 60 ? pet.notes.slice(0, 60) + "..." : pet.notes}
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
