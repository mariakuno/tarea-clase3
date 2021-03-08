import React from 'react';

/*const frutas = [
    'Manzanas',
    'Peras',
    'Papayas',
    'Bananas',
    'Sandias'
]*/

function ListaFrutas(props){
    const {frutas} = props;
    return <div>
        <ul>
        {frutas.map(item => <li>{item}</li>)}
        </ul>
    </div>
}

export default ListaFrutas;