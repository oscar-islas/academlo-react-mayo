import React, {useState, useEffect} from 'react';
import Contador from './components/contador';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);
  const [esPar, setPar] = useState(false);
  const [ocultar, setOcultar] = useState(false);

  useEffect(() => {
    console.log("Es multiplo de cuatro");
  }, []); //componentDidMount -> cuando se renderiza por primera vez un componente
  //cuando se le pasa un valor dentro de los corchetes del segundo argumento 
  //queremos decir que la ejecución del useEffect dependerá de los estados que estén dentro
  //cuando cambie un estado que está dentro de los corchetes -> se ejecutará el useEffect

  useEffect(() => {
    console.log("Se acaba de renderizar este componente App");
    if(contador%4 === 0){
      setPar(true);
    }else{
      setPar(false);
    }
  }) //componentDidUpdate -> cuando se actualiza el componente (ya sea por state o por props)

  const reset = () => {
    setContador(0)
  }

  return (
    <div className="App">
      {
        ocultar ? null : <Contador contador={contador} reset={reset} />
      }
      <h1>Es multiplo de cuatro</h1>
      <h4>{`${esPar ? 'Multiplo cuatro' : 'No es multiplo cuatro'}`}</h4>
      <button onClick={() => { setContador(contador => contador + 1)}} >Aumentar</button>
      <button onClick={() => setOcultar(!ocultar)}>Ocultar/Mostrar</button>
    </div>
  );
}

export default App;
