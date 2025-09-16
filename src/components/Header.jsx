"use client";
import Link from 'next/link';
import styles from './Header.module.css'; // <-- importante

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/"><a>PetCare</a></Link>
      </div>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/pets"><a>Pets</a></Link>
        <Link href="/pets/form"><a>Cadastrar Pet</a></Link>
        <Link href="/about"><a>Sobre mim</a></Link>
      </nav>
    </header>
  )
}
