import Button from '../Button/Button';
import './FormStyle.scss';
import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';

type FormProps = {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
};

function Form({ setTarefas }: FormProps) {
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00');

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa('');
    setTempo('00:00');
  }

  return (
    <form className="novaTarefa" onSubmit={adicionarTarefa}>
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          id="tempo"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          step="1"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit"> Adicionar</Button>
    </form>
  );
}
export default Form;
