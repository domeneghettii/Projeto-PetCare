"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function PetDetails() {
  const { id } = useParams(); // pega o parâmetro da rota /pets/[id]
  const [pet, setPet] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getPetById(id).then(setPet).catch(console.error);
  }, [id]);

  const handleDelete = async () => {
    if (!confirm("Excluir pet?")) return;
    await deletePet(id);
    router.push("/pets"); // redireciona para a lista de pets
  };

  if (!pet) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>Espécie: {pet.species}</p>
      <p>Raça: {pet.breed}</p>
      <p>Idade: {pet.age}</p>
      <p>Observações: {pet.healthNotes}</p>
      <p>
        Tutor: {pet.tutor?.name} — {pet.tutor?.phone}
      </p>

      <Link href={`/pets/edit/${pet.id}`}>
        <button>Editar</button>
      </Link>

      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
}
