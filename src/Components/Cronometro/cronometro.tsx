import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { ITarefa } from '../../types/tarefa';
import Relogio from './Relogio/Relogio';
import './styleCrono.scss';
import tempoParaSegundos from '../../utils/time';

type CronometroProps = {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
};

function Cronometro({ selecionado, finalizarTarefa }: CronometroProps) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }
  return (
    <div className="cronometro">
      <p className="titulo">Escolha um card e inicie um cronômetro</p>
      <div className="relogio">
        <Relogio tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>Começar!</Button>
    </div>
  );
}
export default Cronometro;
