"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getPetById, getTutors, removePet } from "../../../lib/storage";
import Link from "next/link";

export default function PetDetails() {
  const [pet, setPet] = useState(null);
  const [tutor, setTutor] = useState(null);
  const router = useRouter();
  const path = usePathname();
  const id = path.split("/").pop();

  useEffect(() => {
    const p = getPetById(id);
    setPet(p);
    if (p) {
      const t = getTutors().find((x) => x.id === p.tutorId);
      setTutor(t || null);
    }
  }, [id]);

  if (!pet)
    return (
      <div className="card">
        <p>Pet não encontrado.</p>
        <button className="secondary" onClick={() => router.push("/pets")}>
          Voltar
        </button>
      </div>
    );

  function handleDelete() {
    if (!confirm("Deseja excluir este pet?")) return;
    removePet(pet.id);
    router.push("/pets");
  }

  return (
    <div className="card pet-details">
      <h1 className="title">{pet.name}</h1>
      <img src={pet.photo || "/placeholder.png"} alt={pet.name} />
      <p><strong>Espécie:</strong> {pet.species}</p>
      <p><strong>Raça:</strong> {pet.breed}</p>
      <p><strong>Idade:</strong> {pet.age} anos</p>
      <p><strong>Observações:</strong> {pet.notes || "Nenhuma observação"}</p>
      <p><strong>Tutor:</strong> {tutor?.name} ({tutor?.phone})</p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Link href={`/pets/${pet.id}/editar`}>
          <button className="secondary">Editar</button>
        </Link>
        <button className="danger" onClick={handleDelete}>Excluir</button>
        <button className="primary" onClick={() => router.push("/pets")}>Voltar</button>
      </div>
    </div>
  );
}
