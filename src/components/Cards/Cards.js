import './Cards.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

export default function Cards(props){

    return(
        <div className="cards-item">
            <h3>{props.titulo}</h3>
            <p>Precio: ${props.precio}</p>
            <p>Marca: {props.marca}</p>
            <p>Descripción: {props.descripcion}</p>
            <ItemCount stock="5" initial="1"/>
        </div>
    )
} 