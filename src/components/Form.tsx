import { useRef, useState } from "react";
import useAddParticipant from "../state/hook/useAddParticipant";
import useErrorMessage from "../state/hook/useErrorMessage";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addToList = useAddParticipant();
  const errorMessage = useErrorMessage();

  const addNewParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToList(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addNewParticipant}>
      <div className="group-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!name}>Adicionar</button>
      </div>
      {errorMessage && (
        <p className="alert error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Form;
