"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import PetForm from "../../../../components/PetForm";
import { getPetById } from "../../../../lib/storage";

export default function EditPet() {
  const path = usePathname();
  const id = path.split("/").slice(-2)[0];
  const [initial, setInitial] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const p = getPetById(id);
    if (!p) return router.push("/pets");
    setInitial(p);
  }, [id]);

  function onSaved() {
    router.push(`/pets/${id}`);
  }

  if (!initial) return <div className="card">Carregando...</div>;

  return (
    <div>
      <h1 className="title">Editar Pet</h1>
      <PetForm initial={initial} onSaved={onSaved} />
    </div>
  );
}
