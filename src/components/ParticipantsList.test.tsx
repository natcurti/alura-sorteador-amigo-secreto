import { render, screen } from "@testing-library/react";
import ParticipantsList from "./ParticipantsList";
import { useParticipantsList } from "../state/hook/useParticipantsList";
import { RecoilRoot } from "recoil";

jest.mock("../state/hook/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("Uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test("Uma lista de participantes deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});

describe("Uma lista preenchida de participantes", () => {
  const participants = ["Natalia", "Julia"];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  test("Uma lista de participantes deve ser renderizada", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participants.length);
  });
});
