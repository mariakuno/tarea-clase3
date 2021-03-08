import React from 'react';

/*const vegetales = [
    'Pepino',
    'Lechuga',
    'Brocoli',
    'Apio',
    'Cebolla'
]*/
function ListaVegetales(props){
    const {vegetales} = props;
    return <div>
        <ul>
            {vegetales.map(item => <li>{item}</li>)}
        </ul>
    </div>
}

export default ListaVegetales;