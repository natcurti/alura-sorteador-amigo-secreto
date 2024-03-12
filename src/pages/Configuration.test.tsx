import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Configuration from "./Configuration";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});
describe("A página de configuração", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuration />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
