import React, {useState} from 'react';

import Login from './components/login/login';
import Register from './components/register/register';
import Tasks from './components/tasks/tasks';

import './App.css';

function App() {
  const [view, setView] = useState("login");

  //Función que recibe como parametro la vista que queremos mostrar ("login", "register", "tasks")
  const cambiarVista = (vista) => {
    setView(vista);
  }

  //Esta es otra forma de poder cambiar las vistas
  // const cambiarVistaRegistro = () => {
  //   setView("register");
  // }

  // const cambiarVistaTareas = () => {
  //   setView("tasks");
  // }

  //Estructura switch para evaluar el estado view y dependiendo de su valor se podrá 
  //Seleccionar alguno de los siguientes casos
  
  switch(view){
    case "login":
      return <div className="App"><Login cambiarVista={cambiarVista} /></div>
    case "register":
      return <div className="App"><Register cambiarVista={cambiarVista} /></div>
    case "tasks": 
      return <div className="App"><Tasks cambiarVista={cambiarVista} /></div>
    default: 
      return null;
  }
  
}

export default App;
