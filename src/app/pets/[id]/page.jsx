"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { removePet } from "../../../lib/storage";
import Link from "next/link";

export default function PetDetails() {
  const [pet, setPet] = useState(null);
  const [tutor, setTutor] = useState(null);
  const router = useRouter();
  const path = usePathname();
  const id = path.split("/").pop();

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await fetch(`http://localhost:3000/api/pets/${id}`);
        if (!response.ok) {
          setPet(null);
          return;
        }
        const petData = await response.json();
        setPet(petData);
        setTutor({
          nome: petData.tutor_nome,
          telefone: petData.tutor_telefone
        });
      } catch {
        setPet(null);
      }
    }
    fetchPet();
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

  // 🔹 Função corrigida para excluir o pet
  async function handleDelete() {
    if (!confirm("Deseja excluir este pet?")) return;

    try {
      // Faz a requisição DELETE direto pra API
      const response = await fetch(`http://localhost:3000/api/pets/${pet.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        alert("Erro ao excluir o pet. Tente novamente.");
        console.error("Erro ao excluir pet:", response.statusText);
        return;
      }

      alert("Pet excluído com sucesso!");
      router.push("/pets"); // volta pra lista
    } catch (error) {
      console.error("Erro ao excluir pet:", error);
      alert("Erro ao excluir o pet. Verifique o console.");
    }
  }

  const fotoUrl = pet.foto ? pet.foto : "/placeholder.png";

  return (
    <div className="card pet-details">
      <h1 className="title">{pet.nome}</h1>
      <img src={fotoUrl} alt={pet.nome} />
      <p><strong>Espécie:</strong> {pet.especie}</p>
      <p><strong>Raça:</strong> {pet.raca}</p>
      <p><strong>Idade:</strong> {pet.idade} anos</p>
      <p><strong>Observações:</strong> {pet.observacoes || "Nenhuma observação"}</p>
      <p><strong>Tutor:</strong> {tutor?.nome} ({tutor?.telefone})</p>

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
