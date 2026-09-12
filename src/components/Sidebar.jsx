const ITENS = [
  { chave: "painel", rotulo: "Painel" },
  { chave: "disciplinas", rotulo: "Disciplinas" },
  { chave: "atividades", rotulo: "Atividades" },
];

export default function Sidebar({ paginaAtiva, onSelecionar, aberto }) {
  return (
    <nav className={`sidebar ${aberto ? "sidebar--aberto" : ""}`} aria-label="Navegação principal">
      <ul>
        {ITENS.map((item) => (
          <li key={item.chave}>
            <button
              className={paginaAtiva === item.chave ? "sidebar-link ativo" : "sidebar-link"}
              onClick={() => onSelecionar(item.chave)}
              aria-current={paginaAtiva === item.chave ? "page" : undefined}
            >
              {item.rotulo}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
