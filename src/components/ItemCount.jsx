import { useState, useEffect } from 'react'


const ItemCount = ({ stock }) => {
    // const [variableDeEstado, funcionModificadoraDelEstado] = useState(valorInicial)
    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)

    /* console.log('ItemCount') */

    const sumar = () => {
        /* Si la cuenta de productos es mas chica que el stock, entonces suma un producto*/
        if (count < stock) {

            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {

            setCount(count - 1)
        }
    }

    const purchase = () => {
        /* Cambia el estado de la compra de su natural (false) a su contrario (true) */
        setCompra(!compra)
    }


    return (
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="number">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={purchase}>Comprar</button>
        </div>
    )
}
export default ItemCount