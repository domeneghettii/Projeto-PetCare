"use client";
import { useState } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

export default function Home() {
  const [reload, setReload] = useState(false);

  const handlePetAdded = () => {
    setReload(!reload);
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>🐾 PetCare</h1>
      <PetForm onPetAdded={handlePetAdded} />
      <PetList reload={reload} />
    </main>
  );
}
