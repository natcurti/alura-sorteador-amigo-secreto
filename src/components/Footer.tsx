import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hook/useParticipantsList";

const Footer = () => {
  const participants = useParticipantsList();

  const navigate = useNavigate();

  const startGame = () => {
    navigate("/sorteio");
  };

  return (
    <footer>
      <button disabled={participants.length < 3} onClick={startGame}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;
