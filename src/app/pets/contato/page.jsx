"use client";
import Link from "next/link";

export default function PetsList() {
  return (
    <div className="card">
      <h1 className="title">Contato</h1>
      <p>Olá! Estou aqui para te ajudar a criar um pet para você.</p>
      <p>Se você tiver alguma dúvida ou precisar de alguma ajuda, sinta-se à vontade para entrar em contato comigo.</p>
      <p>Meu email é <a href="mailto:luana.domeneghetti@aluno.senai.br">luana.domeneghetti@aluno.senai.br</a></p>
      <p>Você pode também me encontrar no Instagram <a href="https://www.instagram.com/domeneghetti_/">@domeneghetti_</a></p>
    </div>
  );
}