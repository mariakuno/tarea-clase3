import React from 'react';
import ListaFrutas from './ListaFrutas';

function Frutas(props){
        const {frutas}=props;
        return <div>
                <h2>Lista de Frutas</h2>
                <ListaFrutas frutas={frutas}/>
            </div>
}

export default Frutas;