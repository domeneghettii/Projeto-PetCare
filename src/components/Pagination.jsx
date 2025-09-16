"use client"

import styles from '../styles/components/Pagination.module.css'

export default function Pagination({ page, totalPages, onChange }) {
  return (
    <div className={styles.pagination}>
      <button disabled={page <= 1} onClick={() => onChange(page - 1)}>Anterior</button>
      <span> Página {page} de {totalPages} </span>
      <button disabled={page >= totalPages} onClick={() => onChange(page + 1)}>Próxima</button>
    </div>
  )
}