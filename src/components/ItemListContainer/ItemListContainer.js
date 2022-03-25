import Cards from '../Cards/Cards'
import './ItemListContainer.css'

const ItemListContainer = () => {

    return(
        <div className="container-list">
            <Cards titulo="Teclado" precio="12000" marca="Hyperx" descripcion="Switch Blue" />
        </div>
    )
}

export default ItemListContainer;