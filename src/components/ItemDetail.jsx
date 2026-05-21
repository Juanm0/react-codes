import React from 'react'
import ItemCount from './ItemCount'
// para usar un contexto debo importar 2 cosas, 1ro el hook para usar contexto (usecontext) y 2do que contexto quiero usar (cartcontext, en este caso)
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ detalle }) => {
  const { cart, addItem} = useContext(CartContext)
  const onAdd = (cantidad) => {
    addItem(detalle,cantidad)
  }
  return (
     <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
      <h2>Bienvenidos al detalle de {detalle.name}</h2>
      <img width='300px' src={detalle.img} alt={detalle.name} />
      <p>{detalle.description}</p>
      <p>${detalle.price},00</p>
      <p>unidades disponibles:{detalle.stock}</p>
      <ItemCount stock={detalle.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail