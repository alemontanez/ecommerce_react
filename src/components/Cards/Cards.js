import './Cards.css'

export default function Cards(props){

    return(
        <div className="cards-item">
            <h3>{props.titulo}</h3>
            <p>Precio: ${props.precio}</p>
            <p>Marca: {props.marca}</p>
            <p>Descripción: {props.descripcion}</p>
            <button>Comprar</button>
        </div>
    )
} 