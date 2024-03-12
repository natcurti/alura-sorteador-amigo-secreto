import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { useParticipantsList } from "../state/hook/useParticipantsList";

jest.mock("../state/hook/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("Quando não existem participantes suficientes", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test("A brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("Quando existem participantes suficientes", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([
      "Natalia",
      "Julia",
      "João",
    ]);
  });
  test("A brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("A brincadeira começou", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
  });
});
