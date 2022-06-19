import React from 'react';
import './ListaStyle.scss';
function Lista() {
  const tarefas = [
    {
      tarefa: 'React',
      tempo: '02:00:00',
    },
    {
      tarefa: 'JavaScript',
      tempo: '01:00:00',
    },
    {
      tarefa: 'TypeScript',
      tempo: '01:30:00',
    },
  ];
  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className="item">
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;