import '../ItemListCont/ItemListCont.css'
import { useState, useEffect } from "react";
import { getProducts} from '../../asyncMock';
import ItemList from "../ListaItems/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
        }, [categoryId])

    return (
        <div className='Products'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer