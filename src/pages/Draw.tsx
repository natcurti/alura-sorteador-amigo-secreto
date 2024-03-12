import { useParticipantsList } from "../state/hook/useParticipantsList";

const Draw = () => {
  const participants = useParticipantsList();
  return (
    <section>
      <form>
        <select name="partipantActual" id="partipantActual">
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Draw;
