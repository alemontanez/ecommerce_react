import Button from '@mui/material/Button';

function Navbar(){
    return(
        <nav className="App-navbar">
            <div>
                <Button color="success">ecommerce</Button>
                <Button color="success">Categorías</Button>
                <Button color="success">Nosotros</Button>
                <Button color="success">Contacto</Button>
            </div>
        </nav>
    )
}

export default Navbar;