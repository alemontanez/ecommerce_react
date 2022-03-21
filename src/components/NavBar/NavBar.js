import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return(
        <div className="App-navbar">
            <Button color="success">ecommerce</Button>
            <Button color="success">Categorías</Button>
            <Button color="success">Nosotros</Button>
            <Button color="success">Contacto</Button>
            <CartWidget />
        </div>
    )
}

export default NavBar;