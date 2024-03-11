import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="img-logo" role="img" aria-label="Logo do Sorteador"></div>
      <img
        className="player"
        src="/images/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Header;
