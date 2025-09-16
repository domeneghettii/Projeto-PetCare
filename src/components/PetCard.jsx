"use client";
import Link from "next/link";

export default function PetCard({ pet, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 12,
        borderRadius: 6,
        marginBottom: 10,
      }}
    >
      <h3>
        {pet.name} — {pet.species}
      </h3>
      <p>Idade: {pet.age}</p>
      <p>Tutor: {pet.tutor?.name || "—"}</p>

      <Link href={`/pets/${pet.id}`}>Ver</Link>{" | "}
      <Link href={`/pets/edit/${pet.id}`}>Editar</Link>{" | "}
      <button onClick={() => onDelete(pet.id)}>Excluir</button>
    </div>
  );
}
