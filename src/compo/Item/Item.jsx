import '../Item/Item.css';
import { Link } from "react-router-dom";



const Item = ({id, name, img, price, stock}) =>{

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className='img'>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className='ProdructInfo'>
                <p className="ProductPrice">
                    precio: ${price}
                </p>
                <p className="ProductStock">
                    stock disponible: {stock}
                </p>          
            </section>
            <footer className="ProductCardFooter">
                <Link to={`/item/${id}`} className="ProductDetailLink">Ver detalle </Link>
            </footer>
        </article>
    )
}

export default Item