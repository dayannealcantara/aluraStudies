import './ListaStyle.scss';
import { ITarefa } from '../../types/tarefa';
import Item from '../Lista/Item/item';

type ListaProps = {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
};
function Lista({ tarefas, selecionaTarefa }: ListaProps) {
  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
