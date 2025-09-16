"use client";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>PetCare — Projeto de Luana Domeneghetti © {new Date().getFullYear()}</p>
    </footer>
  )
}
