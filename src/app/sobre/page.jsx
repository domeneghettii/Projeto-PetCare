
export default function Sobre() {
  return (
    <div className="card">
      <h1 className="title">Sobre o Projeto</h1>
      <p>
        O <strong>PetCare</strong> é um sistema front-end feito em{" "}
        <strong>Next.js</strong> para cadastrar, listar e editar informações de
        pets e seus tutores.
      </p>
      <p>
        <strong>Funcionalidades:</strong> Cadastro, listagem, edição, exclusão e
        visualização de detalhes de cada pet.
      </p>
      <p>
        <strong>Aprendizados:</strong> Rotas com App Router, organização de
        componentes, uso de localStorage para persistência temporária e
        estilização global com CSS.
      </p>
    </div>
  );
}
