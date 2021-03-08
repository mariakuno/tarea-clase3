import React from 'react';
import ListaVegetales from './ListaVegetales';

function Vegetales(props){
    const {vegetales} = props;
        return <div>
                <h2>Lista de Vegetales</h2>
                <ListaVegetales vegetales={vegetales}/>
            </div>
    }


export default Vegetales;