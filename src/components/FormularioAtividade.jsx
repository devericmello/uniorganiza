import { useState } from "react";

export default function FormularioAtividade({ disciplinas, onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [disciplinaId, setDisciplinaId] = useState(disciplinas[0]?.id ?? "");
  const [prazo, setPrazo] = useState("");

  function lidarEnvio(evento) {
    evento.preventDefault();
    if (!titulo.trim() || !disciplinaId || !prazo) return;
    onAdicionar({ titulo: titulo.trim(), disciplinaId, prazo, concluida: false });
    setTitulo("");
    setPrazo("");
  }

  return (
    <form className="formulario" onSubmit={lidarEnvio}>
      <fieldset>
        <legend>Nova atividade</legend>

        <label htmlFor="titulo-atividade">Título</label>
        <input
          id="titulo-atividade"
          type="text"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Ex.: Prova 2"
          required
        />

        <label htmlFor="disciplina-atividade">Disciplina</label>
        <select
          id="disciplina-atividade"
          value={disciplinaId}
          onChange={(evento) => setDisciplinaId(evento.target.value)}
          required
        >
          {disciplinas.map((disciplina) => (
            <option key={disciplina.id} value={disciplina.id}>
              {disciplina.nome}
            </option>
          ))}
        </select>

        <label htmlFor="prazo-atividade">Prazo</label>
        <input
          id="prazo-atividade"
          type="date"
          value={prazo}
          onChange={(evento) => setPrazo(evento.target.value)}
          required
        />

        <button type="submit" className="botao-primario">
          Adicionar atividade
        </button>
      </fieldset>
    </form>
  );
}
