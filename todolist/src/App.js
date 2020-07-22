import React from 'react';
import Loading from './components/loading';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      loading: true,
      open: false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000)
  }

  mostrarCarga = () => {
    this.setState({loading: true});
  }

  rand = () => {
    return Math.round(Math.random() * 20) - 10;
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render(){
    const top = 50;
    const left = 50;

    let styles =  {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(${top}%, ${left}%)`,
    }

    if(this.state.loading === true){
      return (
        <div className="App">
          <Loading />
        </div>
      );
    }else{
      return (
        <div className="App">
          <h1>Bienvenido a mi aplicación web hecha con react</h1>
          {/* <button onClick={this.mostrarCarga}>Mostrar pantalla de carga</button> */}
          <form>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </form>
          <div>
            <button type="button" onClick={this.handleOpen}>
              Open Modal
            </button>
            <Modal
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div style={styles}>Mensaje de ejemplo</div>
            </Modal>
          </div>
        </div>
      );
    }
  }
}

export default App;
