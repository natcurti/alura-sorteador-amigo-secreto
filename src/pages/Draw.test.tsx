import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../state/hook/useParticipantsList";
import Draw from "./Draw";
import { useResultDraw } from "../state/hook/useResultDraw";

jest.mock("../state/hook/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

jest.mock("../state/hook/useResultDraw", () => {
  return {
    useResultDraw: jest.fn(),
  };
});

describe("Na página de sorteio", () => {
  const participants = ["Natalia", "Julia", "João"];

  const resultado = new Map([
    ["Natalia", "Julia"],
    ["Julia", "João"],
    ["João", "Natalia"],
  ]);
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useResultDraw as jest.Mock).mockReturnValue(resultado);
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

  test("o nome do amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const resultDraw = screen.getByRole("alert");
    expect(resultDraw).toBeInTheDocument();
  });
});
