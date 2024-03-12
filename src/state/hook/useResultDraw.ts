import { useRecoilValue } from "recoil";
import { resultDraw } from "../atom";

export const useResultDraw = () => {
  return useRecoilValue(resultDraw);
};
