import { useState } from "react";
import { useParticipantsList } from "../state/hook/useParticipantsList";
import { useResultDraw } from "../state/hook/useResultDraw";
import Card from "../components/Card";
import "./Draw.css";

const Draw = () => {
  const participants = useParticipantsList();

  const [currentParticipant, setCurrentParticipant] = useState("");
  const [resultDraw, setResultDraw] = useState("");

  const result = useResultDraw();

  const draw = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (result.has(currentParticipant)) {
      setResultDraw(result.get(currentParticipant)!);
    }
  };
  return (
    <Card>
      <section className="draw">
        <form onSubmit={draw}>
          <select
            required
            name="currentParticipant"
            id="currentParticipant"
            placeholder="Selecione o seu nome"
            value={currentParticipant}
            onChange={(e) => setCurrentParticipant(e.target.value)}
          >
            <option>Selecione seu nome:</option>
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <button className="btn-draw">Sortear</button>
        </form>
        {resultDraw && (
          <p role="alert" className="result">
            {resultDraw}
          </p>
        )}
        <footer className="draw">
          <img src="/images/aviao.png" alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  );
};

export default Draw;
