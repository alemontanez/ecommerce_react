import Cards from '../Cards/Cards'
import './ItemListContainer.css'

const ItemListContainer = () => {

    return(
        <div className="container-list">
            <Cards titulo="Teclado" precio="12000" marca="Hyperx" descripcion="Switch Blue" />
            <Cards titulo="Teclado" precio="12500" marca="Corsair" descripcion="Switch Aqua" />
            <Cards titulo="Teclado" precio="12000" marca="Logitech" descripcion="Switch Red" />
        </div>
    )
}

export default ItemListContainer;