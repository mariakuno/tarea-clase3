import React from 'react';
import Frutas from './Frutas';
import Vegetales from './Vegetales';

class TiposComida extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const frutas = [
        'Manzanas2',
        'Peras2',
        'Papayas2',
        'Bananas2',
        'Sandias2'];
        const vegetales = [
            'Pepino2',
            'Lechuga2',
            'Brocoli2',
            'Apio2',
            'Cebolla2'
        ]
        return <div>
                <h1>Tipos de Comida</h1>
                <Frutas frutas={frutas}/>
                <br></br>
                <Vegetales vegetales={vegetales}/>
            </div>
    }
}

export default TiposComida;