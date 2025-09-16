import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { api } from '../../services/api'
import styles from '../../styles/pages/PetDetails.module.css'
import Link from 'next/link'

export default function PetDetails() {
  const router = useRouter()
  const { id } = router.query
  const [pet, setPet] = useState(null)
  const [tutor, setTutor] = useState(null)

  useEffect(() => {
    if (!id) return
    api.getPetById(id).then(p => {
      setPet(p)
      if (p?.tutorId) {
        api.getTutors().then(tutors => setTutor(tutors.find(t => t.id === p.tutorId)))
      }
    })
  }, [id])

  function handleDelete() {
    if (!confirm('Excluir este pet?')) return
    api.deletePet(id).then(() => router.push('/pets'))
  }

  if (!pet) return (
    <div>
      <Header />
      <main className={styles.main}><p>Carregando...</p></main>
      <Footer />
    </div>
  )

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>{pet.name}</h1>
        <div className={styles.container}>
          <div className={styles.left}>
            {pet.photo ? <img src={pet.photo} alt={pet.name} /> : <div className={styles.placeholder}>Sem foto</div>}
          </div>
          <div className={styles.right}>
            <p><strong>Espécie:</strong> {pet.species}</p>
            <p><strong>Raça:</strong> {pet.breed || '—'}</p>
            <p><strong>Idade:</strong> {pet.age ?? '—'} anos</p>
            <p><strong>Notas:</strong> {pet.notes || '—'}</p>
            <p><strong>Observações de Saúde:</strong> {pet.observations || '—'}</p>

            <hr />
            <h3>Tutor Responsável</h3>
            <p><strong>Nome:</strong> {tutor?.name || '—'}</p>
            <p><strong>Telefone:</strong> {tutor?.phone || '—'}</p>

            <div className={styles.actions}>
              <Link href={`/pets/form?id=${pet.id}`}><a className={styles.btn}>Editar</a></Link>
              <button className={styles.danger} onClick={handleDelete}>Excluir</button>
              <button className={styles.secondary} onClick={() => router.back()}>Voltar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}