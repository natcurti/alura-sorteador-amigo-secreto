import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe("Testa o comportamento do formulário", () => {
  test("Quando o input estiver vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("Adicionar um participante quando o nome estiver preenchido", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Natalia Julia",
      },
    });
    fireEvent.click(button);
    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Um nome não pode ser adicionado em duplicidade", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Natalia Julia",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Natalia Julia",
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });

  test("A mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Natalia Julia",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Natalia Julia",
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
