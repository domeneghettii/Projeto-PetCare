'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao PetCare</h1>
      <p>Sistema de cadastro e gerenciamento de pets.</p>
      <Link to="/pets"><button>Ver Pets</button></Link>
    </div>
  )
}

