import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CartaoAtividade from "./components/CartaoAtividade.jsx";
import FormularioDisciplina from "./components/FormularioDisciplina.jsx";
import FormularioAtividade from "./components/FormularioAtividade.jsx";
import { disciplinasIniciais, atividadesIniciais } from "./data/seed.js";
import "./index.css";

let proximoId = 100;
function gerarId(prefixo) {
  proximoId += 1;
  return `${prefixo}${proximoId}`;
}

export default function App() {
  const [disciplinas, setDisciplinas] = useState(disciplinasIniciais);
  const [atividades, setAtividades] = useState(atividadesIniciais);
  const [paginaAtiva, setPaginaAtiva] = useState("painel");
  const [menuAberto, setMenuAberto] = useState(false);

  const atividadesOrdenadas = useMemo(
    () => [...atividades].sort((a, b) => a.prazo.localeCompare(b.prazo)),
    [atividades]
  );

  function encontrarDisciplina(id) {
    return disciplinas.find((disciplina) => disciplina.id === id);
  }

  function adicionarDisciplina(dados) {
    setDisciplinas((atual) => [...atual, { id: gerarId("d"), ...dados }]);
  }

  function adicionarAtividade(dados) {
    setAtividades((atual) => [...atual, { id: gerarId("a"), ...dados }]);
  }

  function alternarConclusao(id) {
    setAtividades((atual) =>
      atual.map((atividade) =>
        atividade.id === id
          ? { ...atividade, concluida: !atividade.concluida }
          : atividade
      )
    );
  }

  function selecionarPagina(pagina) {
    setPaginaAtiva(pagina);
    setMenuAberto(false);
  }

  return (
    <div className="app-shell">
      <Header onToggleMenu={() => setMenuAberto((v) => !v)} />
      <div className="app-corpo">
        <Sidebar
          paginaAtiva={paginaAtiva}
          onSelecionar={selecionarPagina}
          aberto={menuAberto}
        />

        <main className="app-conteudo">
          {paginaAtiva === "painel" && (
            <section aria-labelledby="titulo-painel">
              <h2 id="titulo-painel">Prazos da semana</h2>
              {atividadesOrdenadas.length === 0 ? (
                <p>Nenhuma atividade cadastrada ainda.</p>
              ) : (
                <div className="grade-cartoes">
                  {atividadesOrdenadas.map((atividade) => (
                    <CartaoAtividade
                      key={atividade.id}
                      atividade={atividade}
                      disciplina={encontrarDisciplina(atividade.disciplinaId)}
                      onConcluir={alternarConclusao}
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {paginaAtiva === "disciplinas" && (
            <section aria-labelledby="titulo-disciplinas">
              <h2 id="titulo-disciplinas">Minhas disciplinas</h2>
              <ul className="lista-disciplinas">
                {disciplinas.map((disciplina) => (
                  <li key={disciplina.id} style={{ borderLeftColor: disciplina.cor }}>
                    {disciplina.nome}
                  </li>
                ))}
              </ul>
              <FormularioDisciplina onAdicionar={adicionarDisciplina} />
            </section>
          )}

          {paginaAtiva === "atividades" && (
            <section aria-labelledby="titulo-atividades">
              <h2 id="titulo-atividades">Gerenciar atividades</h2>
              <FormularioAtividade
                disciplinas={disciplinas}
                onAdicionar={adicionarAtividade}
              />
              <ul className="lista-atividades">
                {atividadesOrdenadas.map((atividade) => {
                  const disciplina = encontrarDisciplina(atividade.disciplinaId);
                  return (
                    <li key={atividade.id}>
                      <span>{atividade.titulo}</span>
                      <span>{disciplina ? disciplina.nome : "—"}</span>
                      <span>{atividade.prazo}</span>
                      <span>{atividade.concluida ? "Concluída" : "Pendente"}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
