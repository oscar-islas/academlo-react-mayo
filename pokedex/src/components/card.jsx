import React from 'react';

export default function Card(props){
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.image} alt="pokemon" />
            <div>
                <ul>
                    <li>Hp: {props.base.HP}</li>
                    <li>Ataque: {props.base.Attack}</li>
                    <li>Defensa: {props.base.Defense}</li>
                    <li>Velocidad: {props.base.Speed}</li>
                </ul>
            </div>
            <div>
                {props.types.map(type => {
                    return <span className={`types ${type}`}>{type}</span>
                })}
                
            </div>
        </div>
    )
}