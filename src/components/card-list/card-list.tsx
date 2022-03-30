import React from 'react';
import './card-list.css';
import {Card} from './../cards/cards';


export const CardList =(props:any) =>( 
<div className='card-list'>
{props.monsters.map((monster: { id: any; })=>(
                <Card key={monster.id} monster={monster}></Card>
            ))
}
</div>)