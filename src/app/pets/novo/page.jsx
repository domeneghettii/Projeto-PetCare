"use client";
import PetForm from "../../../components/PetForm";
import { useRouter } from "next/navigation";

export default function NewPet() {
  const router = useRouter();

  function onSaved() {
    router.push("/pets");
  }

  return (
    <div>
      <h1 className="title">Cadastrar Novo Pet</h1>
      <PetForm onSaved={onSaved} />
    </div>
  );
}
