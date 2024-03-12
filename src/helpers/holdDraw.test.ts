import { holdDraw } from "./holdDraw";

describe("Dado um sorteio de amigo secreto", () => {
  test("cada participante não deve tirar seu próprio nome", () => {
    const participants = [
      "Natalia",
      "Julia",
      "Jose",
      "João",
      "Paula",
      "Vinicius",
    ];
    const draw = holdDraw(participants);
    participants.forEach((person) => {
      const secretResult = draw.get(person);
      expect(secretResult).not.toEqual(person);
    });
  });
});
