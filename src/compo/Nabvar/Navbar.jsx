import classes from "./Navbar.module.css"
import CartWidget from "../CatWidgets/CartWidget";

const Navbar = () =>{
    return (
        <nav className={classes.header}> 
            <h3>Tienda de ropa</h3>
            <div>
                <button>Zapatillas</button>
                <button>remeras</button>
                <button>Pantalones</button>
            </div>
            <CartWidget />
        </nav>
    );
};

export default Navbar