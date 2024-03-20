import contador from './contador.module.css'
import { useState } from 'react'

const ItemCont = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const incremento = () => {
        if (quantity < stock) {
            setQuantity (quantity + 1)
        }
    }

    const quitar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className = {contador.cont}>
            <div className = {contador.controles}>
                <button className = {contador.Button} onClick = {quitar}> - </button>
                <h4 className = {contador.numero}> {quantity} </h4>
                <button className= {contador.Button} onClick={incremento}> + </button>
            </div>
            <div>
                <button className = {contador.Button} onClick = {() => onAdd(quantity)} disabled = {!stock}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCont