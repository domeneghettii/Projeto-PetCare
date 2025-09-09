"use client";
import { useEffect, useState } from "react";
import api from "../api";

export default function PetList({ reload }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets")
      .then(res => setPets(res.data))
      .catch(err => console.error("Erro ao buscar pets:", err));
  }, [reload]);

  return (
    <div>
      <h2>Lista de Pets</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <strong>{pet.nome}</strong> ({pet.especie}) - Tutor: {pet.tutor_nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
