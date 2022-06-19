import React from 'react';
import Button from '../Button/Button';
import './FormStyle.scss';

function Form() {
  return (
    <form className="novaTarefa">
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          id="time"
          name="tempo"
          step="1"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button />
    </form>
  );
}
export default Form;
