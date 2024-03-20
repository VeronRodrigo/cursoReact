import classes from "./Navbar.module.css"
import CartWidget from "../CatWidgets/CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className={classes.ul}> 
            <li className={classes.li}>
                <Link to='/'>
                    <h4>Tienda de ropa</h4>
                </Link>
            </li>
        <ul className={classes.ul}>
            <li className={classes.li}>  <NavLink to={`/category/remeras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink></li>
            <li className={classes.li}>  <NavLink to={`/category/pantalones`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink></li>
            <li className={classes.li}>  <NavLink to={`/category/zapatillas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink></li>
        </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar