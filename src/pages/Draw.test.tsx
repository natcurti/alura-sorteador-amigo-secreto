import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../state/hook/useParticipantsList";
import Draw from "./Draw";

jest.mock("../state/hook/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("Na página de sorteio", () => {
  const participants = ["Natalia", "Julia", "João"];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length);
  });
});
