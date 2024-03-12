import { useParticipantsList } from "./useParticipantsList";
import { useSetRecoilState } from "recoil";
import { resultDraw } from "../atom";
import { holdDraw } from "../../helpers/holdDraw";

export const useDraw = () => {
  const participants = useParticipantsList();

  const setResult = useSetRecoilState(resultDraw);

  return () => {
    const result = holdDraw(participants);
    setResult(result);
  };
};
