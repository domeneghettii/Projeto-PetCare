"use client";
import { useState } from "react";

export default function TutorDropdown({ tutors, value, onChange, onAddTutor }) {
  const [showNew, setShowNew] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleAdd() {
    if (!name.trim()) return alert("Nome do tutor é obrigatório");
    onAddTutor({ name: name.trim(), phone: phone.trim() });
    setName("");
    setPhone("");
    setShowNew(false);
  }

  return (
    <div>
      <select 
        className="input" 
        value={value || ""} 
        onChange={(e) => onChange(e.target.value)}
        disabled={loading}
      >
        <option value="">-- Selecione um tutor --</option>
        {tutors && tutors.length > 0 ? (
          tutors.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} — {t.phone}
            </option>
          ))
        ) : (
          <option value="" disabled>Nenhum tutor cadastrado</option>
        )}
      </select>

      <button
        type="button"
        onClick={() => setShowNew(!showNew)}
        className="secondary"
        style={{ marginTop: "8px" }}
        disabled={loading}
      >
        {loading ? 'Carregando...' : '+ Novo Tutor'}
      </button>

      {showNew && (
        <div style={{ marginTop: "8px", display: "grid", gap: "8px" }}>
          <input
            className="input"
            placeholder="Nome do tutor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="button" className="primary" onClick={handleAdd}>
            Salvar Tutor
          </button>
        </div>
      )}
    </div>
  );
}
