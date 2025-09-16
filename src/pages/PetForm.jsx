"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PetForm() {
  const { id } = useParams(); // pega o id da rota /pets/edit/[id]
  const router = useRouter();   // substitui useNavigate
  const editMode = Boolean(id);

  const [tutors, setTutors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    healthNotes: "",
    tutorId: ""
  });

  useEffect(() => {
    getTutors().then(setTutors).catch(console.error);

    if (editMode) {
      getPetById(id).then(p =>
        setForm({
          name: p.name,
          species: p.species,
          breed: p.breed,
          age: p.age,
          healthNotes: p.healthNotes,
          tutorId: p.tutor?.id || ""
        })
      ).catch(console.error);
    }
  }, [id, editMode]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editMode) await updatePet(id, form);
    else await createPet(form);
    router.push("/pets"); // substitui nav("/pets")
  };

  return (
    <div>
      <h1>{editMode ? "Editar Pet" : "Cadastrar Pet"}</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 400 }}
      >
        <input
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Espécie"
          name="species"
          value={form.species}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Raça"
          name="breed"
          value={form.breed}
          onChange={handleChange}
        />
        <input
          placeholder="Idade"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <textarea
          placeholder="Observações"
          name="healthNotes"
          value={form.healthNotes}
          onChange={handleChange}
        />

        <select
          name="tutorId"
          value={form.tutorId}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o tutor</option>
          {tutors.map(t => (
            <option key={t.id} value={t.id}>
              {t.name} — {t.phone}
            </option>
          ))}
        </select>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
