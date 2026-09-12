function formatarData(iso) {
  const data = new Date(iso + "T00:00:00");
  return data.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

function diasRestantes(iso) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const prazo = new Date(iso + "T00:00:00");
  const diff = Math.round((prazo - hoje) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function CartaoAtividade({ atividade, disciplina, onConcluir }) {
  const dias = diasRestantes(atividade.prazo);
  const urgente = dias <= 2;

  return (
    <article
      className={`cartao-atividade ${atividade.concluida ? "cartao-atividade--concluida" : ""}`}
      style={{ borderLeftColor: disciplina ? disciplina.cor : "#999" }}
    >
      <h3>{disciplina ? disciplina.nome : "Disciplina não encontrada"}</h3>
      <p className="cartao-atividade__titulo">{atividade.titulo}</p>
      <p className="cartao-atividade__prazo">
        Prazo: {formatarData(atividade.prazo)}
        {!atividade.concluida && urgente && (
          <span className="etiqueta-urgente"> · urgente</span>
        )}
      </p>
      <button
        className="botao-secundario"
        onClick={() => onConcluir(atividade.id)}
        aria-pressed={atividade.concluida}
      >
        {atividade.concluida ? "Concluída ✓" : "Marcar como concluída"}
      </button>
    </article>
  );
}
