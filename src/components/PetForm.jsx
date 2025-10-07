"use client";
import { useState, useEffect } from "react";
import TutorDropdown from "./TutorDropdown";
import { addPet, updatePet, addTutor, getTutors } from "../lib/storage";

export default function PetForm({ initial = null, onSaved }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000/api/pets";
  const [form, setForm] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    notes: "",
    tutorId: "",
    photo: "",
  });
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    setTutors(getTutors());
    if (initial) setForm({ ...initial });
  }, [initial]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddTutor(tutor) {
    const newTutor = addTutor(tutor);
    setTutors(getTutors());
    setForm((prev) => ({ ...prev, tutorId: newTutor.id }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return alert("Nome é obrigatório");
    if (!form.tutorId) return alert("Selecione um tutor ou cadastre um novo");
    
    const payload = {
      name: form.name.trim(),
      species: form.species,
      breed: form.breed.trim(),
      age: Number(form.age) || 0,
      notes: form.notes.trim(),
      tutorId: form.tutorId,
      photo: form.photo.trim(),
    };
    
    if (initial && initial.id) {
      payload.id = initial.id;
      updatePet(payload);
    } else {
      addPet(payload);
    }
    
    onSaved && onSaved(payload);
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ display: "grid", gap: "12px" }}>
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ flex: 1 }}>
          <label className="small">Nome</label>
          <input
            className="input"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="small">Espécie</label>
          <select
            className="input"
            name="species"
            value={form.species}
            onChange={handleChange}
          >
            <option>Cão</option>
            <option>Gato</option>
            <option>Outro</option>
          </select>
        </div>
        <div>
          <label className="small">Idade</label>
          <input
            className="input"
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label className="small">Raça</label>
          <input
            className="input"
            name="breed"
            value={form.breed}
            onChange={handleChange}
            placeholder="Raça"
          />
        </div>
      </div>

      <div>
        <label className="small">Foto</label>
        <input
          className="input"
          name="photo"
          value={form.photo}
          onChange={handleChange}
          placeholder="URL da foto"
        />
      </div>

      <div>
        <label className="small">Tutor</label>
        <TutorDropdown
          tutors={tutors}
          value={form.tutorId}
          onChange={(val) => setForm((prev) => ({ ...prev, tutorId: val }))}
          onAddTutor={handleAddTutor}
        />
      </div>

      <div>
        <label className="small">Observações</label>
        <textarea
          className="input"
          name="notes"
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      <div style={{ textAlign: "right" }}>
        <button type="submit" className="primary">
          Salvar
        </button>
      </div>
    </form>
  );
}