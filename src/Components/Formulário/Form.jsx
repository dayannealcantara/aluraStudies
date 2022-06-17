import React from 'react';
import Button from '../Button/Button';

function Form() {
  return (
    <aside>
      <div>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div>
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
    </aside>
  );
}
export default Form;
