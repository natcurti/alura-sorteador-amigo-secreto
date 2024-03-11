import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("Quando o input estiver vazio, novos participantes não podem ser adicionados", () => {
  render(<Form />);
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const button = screen.getByRole("button");
  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});
