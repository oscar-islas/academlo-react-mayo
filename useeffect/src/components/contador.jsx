import React, {useEffect} from 'react';

export default function Contador(props){
    useEffect(() => {
        return () => {
            props.reset();
            console.log("Se va a desmontar el componente Contador");
        }
    }, []); //componentWillUnmount -> Se ejecuta cuando el componente se va a desmontar

    return (
        <React.Fragment>
            <h1>Contador</h1>
            <h4>{props.contador}</h4>
        </React.Fragment>
    )
}