"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css'; // <-- aqui

export default function Page() {
  const [recentPets, setRecentPets] = useState([]);

  useEffect(() => {
    api.init();
    api.getPets().then(pets => {
      const recent = pets.slice().reverse().slice(0, 5);
      setRecentPets(recent);
    });
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>PetCare</h1>
          <p>Sistema para cadastro, listagem e detalhamento de pets.</p>
          <div className={styles.actions}>
            <Link href="/pets/form" className={styles.primary}>Cadastrar Pet</Link>
            <Link href="/pets" className={styles.secondary}>Ver Lista de Pets</Link>
          </div>
        </section>

        <section className={styles.recent}>
          <h2>Pets recentes</h2>
          {recentPets.length === 0 ? (
            <p>Nenhum pet cadastrado ainda.</p>
          ) : (
            <ul>
              {recentPets.map(p => (
                <li key={p.id}>
                  <Link href={`/pets/${p.id}`}>{p.name} — {p.species}</Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
