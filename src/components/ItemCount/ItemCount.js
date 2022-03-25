import React, { useState } from 'react';

const ItemCount = ({stock, initial}) => {

    const [contador, setContador] = useState(parseInt(initial));

    const agregarProducto = () => {
        if (contador < stock){
            setContador (contador + 1);
        }
    }

    const restarProducto = () => {
        if (contador > 1){
            setContador (contador - 1);
        }
    }

    const onAdd = () => {
        alert(`Se agregaron ${contador} productos al carrito`)
    }

    return(
        <div>
            <button onClick={restarProducto}>-</button>
            <p>{contador}</p>
            <button onClick={agregarProducto}>+</button>
            <button onClick={onAdd}>Agregar producto</button>
        </div>
    )
}

export default ItemCount;