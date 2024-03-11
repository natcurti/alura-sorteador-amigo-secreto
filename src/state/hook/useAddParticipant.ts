import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, participantsList } from "../atom";

const useAddParticipant = () => {
  const setParticipantsList = useSetRecoilState(participantsList);
  const list = useRecoilValue(participantsList);
  const setError = useSetRecoilState(errorState);
  return (nameParticipant: string) => {
    if (list.includes(nameParticipant)) {
      setError("Nomes duplicados não são permitidos");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    return setParticipantsList((previous) => [...previous, nameParticipant]);
  };
};

export default useAddParticipant;
