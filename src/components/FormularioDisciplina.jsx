import { useState } from "react";

const CORES = ["#2f5597", "#e74c3c", "#e67e22", "#27ae60", "#8e44ad", "#16a085"];

export default function FormularioDisciplina({ onAdicionar }) {
  const [nome, setNome] = useState("");

  function lidarEnvio(evento) {
    evento.preventDefault();
    const nomeLimpo = nome.trim();
    if (!nomeLimpo) return;
    const cor = CORES[Math.floor(Math.random() * CORES.length)];
    onAdicionar({ nome: nomeLimpo, cor });
    setNome("");
  }

  return (
    <form className="formulario" onSubmit={lidarEnvio}>
      <label htmlFor="nome-disciplina">Nova disciplina</label>
      <div className="formulario__linha">
        <input
          id="nome-disciplina"
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex.: Cálculo II"
          required
        />
        <button type="submit" className="botao-primario">
          Adicionar
        </button>
      </div>
    </form>
  );
}
