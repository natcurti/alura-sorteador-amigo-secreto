import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hook/useParticipantsList";
import { useDraw } from "../state/hook/useDraw";

const Footer = () => {
  const participants = useParticipantsList();

  const navigate = useNavigate();
  const draw = useDraw();

  const startGame = () => {
    draw();
    navigate("/sorteio");
  };

  return (
    <footer className="footer-config">
      <button
        className="button"
        disabled={participants.length < 3}
        onClick={startGame}
      >
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;
