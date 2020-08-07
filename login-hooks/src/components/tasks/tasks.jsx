import React from 'react';

const Tasks = (props) => {

    return (
        <div>
            <h1>Estamos en la vista de tareas</h1>
            <button onClick={() => props.cambiarVista("login")}>Cerrar Sesión</button>
        </div>
    )
}

export default Tasks;