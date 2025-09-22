"use client";
import { useEffect, useState } from "react";
import { seedIfEmpty, getPets, getTutors, removePet } from "../../lib/storage";
import PetCard from "../../components/PetCard";
import Pagination from "../../components/Pagination";

export default function PetsList() {
  const [pets, setPets] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    seedIfEmpty();
    setPets(getPets());
    setTutors(getTutors());
  }, []);

  function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir este pet?")) return;
    removePet(id);
    setPets(getPets());
  }

  const totalPages = Math.ceil(pets.length / perPage) || 1;
  const start = (page - 1) * perPage;
  const pagePets = pets.slice(start, start + perPage);

  return (
    <div className="card">
      <h1 className="title">Lista de Pets</h1>
      <div className="pet-list" style={{ marginTop: "12px" }}>
        {pagePets.length === 0 && (
          <p className="small">Nenhum pet cadastrado ainda.</p>
        )}
        {pagePets.map((pet) => {
          const tutor = tutors.find((t) => t.id === pet.tutorId);
          return (
            <PetCard
              key={pet.id}
              pet={pet}
              tutor={tutor}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
