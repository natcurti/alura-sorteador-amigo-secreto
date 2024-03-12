import { useParticipantsList } from "../state/hook/useParticipantsList";

const ParticipantsList = () => {
  const participants: string[] = useParticipantsList();
  return (
    <ul>
      {participants.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default ParticipantsList;
