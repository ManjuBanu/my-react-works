import React from 'react';
import './cards.css';

export const Card = (props:any) =>(
    <div className='card-container'>
        <img alt="monsters" src={`https://robohash.org/E${props.monster.id}X.png?set=set4&size=150x280`}/>
        <h2>{props.monster.name}</h2>
<p>{props.monster.email}</p>
    </div>
)