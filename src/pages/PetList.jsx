import { useEffect, useState } from "react"
import PetCard from "../components/PetCard"

export default function PetList() {
  const [pets, setPets] = useState([])

  const loadPets = () => {
    getPets().then(data => setPets(data)).catch(err => console.error(err))
  }

  useEffect(() => {
    loadPets()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm("Deseja excluir este pet?")) return
    await deletePet(id)
    loadPets()
  }

  return (
    <div>
      <h1>Lista de Pets</h1>
      {pets.length === 0 ? <p>Nenhum pet cadastrado.</p> :
        pets.map(p => <PetCard key={p.id} pet={p} onDelete={handleDelete} />)
      }
    </div>
  )
}

