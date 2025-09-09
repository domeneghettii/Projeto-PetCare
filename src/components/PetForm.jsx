"use client";
import { useState } from "react";
import api from "../api";


export default function PetForm({ onPetAdded }) {
  const [form, setForm] = useState({
    nome: "",
    especie: "",
    raca: "",
    idade: "",
    observacoes: "",
    tutor_id: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/pets", form);
      onPetAdded();
      setForm({ nome: "", especie: "", raca: "", idade: "", observacoes: "", tutor_id: "" });
    } catch (error) {
      console.error("Erro ao cadastrar pet:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Pet</h2>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
      <input name="especie" placeholder="Espécie" value={form.especie} onChange={handleChange} />
      <input name="raca" placeholder="Raça" value={form.raca} onChange={handleChange} />
      <input name="idade" type="number" placeholder="Idade" value={form.idade} onChange={handleChange} />
      <input name="observacoes" placeholder="Observações" value={form.observacoes} onChange={handleChange} />
      <input name="tutor_id" type="number" placeholder="ID do Tutor" value={form.tutor_id} onChange={handleChange} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
