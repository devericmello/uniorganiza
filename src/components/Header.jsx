export default function Header({ onToggleMenu }) {
  return (
    <header className="app-header">
      <button
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-label="Abrir menu de navegação"
      >
        <span aria-hidden="true">&#9776;</span>
      </button>
      <h1 className="app-title">UniOrganiza</h1>
      <span className="app-user">Olá, Eric</span>
    </header>
  );
}
