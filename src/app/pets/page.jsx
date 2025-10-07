"use client";
import { useEffect, useState } from "react";
import { seedIfEmpty, getTutors, removePet } from "../../lib/storage";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
import PetCard from "../../components/PetCard";
import Pagination from "../../components/Pagination";

export default function PetsList() {
  const [pets, setPets] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 4;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPets() {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/pets`);
        console.log('Status da resposta:', response.status);
        if (!response.ok) {
          console.error('Erro ao buscar pets:', response.statusText);
          setPets([]);
          setError('Erro ao buscar pets: ' + response.statusText);
          return;
        }
        const json = await response.json();
        console.log('Retorno da API de pets:', json);
        setPets(Array.isArray(json) ? json : []);
        const tutorsData = await getTutors();
        setTutors(tutorsData);
        setError(null);
      } catch (error) {
        setPets([]);
        setError('Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    }
    fetchPets();
  }, []);

  async function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir este pet?")) return;
    
    try {
      setLoading(true);
      await removePet(id);
      await loadData(); 
      setError(null);
    } catch (err) {
      setError('Erro ao excluir pet');
      console.error(err);
    } finally {
      setLoading(false);
    }
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
          const tutor = {
            nome: pet.tutor_nome,
            telefone: pet.tutor_telefone
          };
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
