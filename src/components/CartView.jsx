import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const { cart, clear, total, deleteItem } = useContext(CartContext)
    return (
        <div>
            <h1>Tu carrito 🛒</h1>
            <div>
                {/* {cart.map((compra)=>(<CartItem key={compra.id} compra={compra}/>))} */}
                {cart.map((compra) => (
                    <div key={compra.id} style={{
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <img src={compra.img} alt={compra.name} style={{ width: '10rem' }} />
                        <span>{compra.name}</span>
                        <span>{compra.quantity}</span>
                        <span>${compra.price},00</span>
                        <span>precio final: ${compra.price * compra.quantity},00</span>
                        <button className='btn btn-danger' onClick={()=> deleteItem(compra.id)}>🗑️</button>

                    </div>

                ))}
            </div>
            <span>Total a pagar: ${total()},00</span>
            <div style={{
                justifyContent: 'space-between',
                width: '80%',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
            }}>
                <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                <button className='btn btn-success'>Terminar compra</button>
            </div>

        </div>
    )
}

export default CartView