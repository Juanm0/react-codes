import { createContext, useState } from "react";
//1. creamos el contexto

export const CartContext = createContext()

//2. creamos al proveedor

export const CartProvider = ({children})=>{
const [cart,setCart]=useState([])



//agregar un producto al carrito
const addItem = (item,qty)=>{
    if(isInCart(item.id)){
        //ya existe
        setCart(
            cart.map((prod)=>{
                if(prod.id === item.id){
                    //sumar cantidades
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    //lo dejo tal como está
                    return prod
                }
            })
        )
    }else{
        //no existe, lo agrego nuevo
        setCart([...cart,{...item, quantity:qty}])
    }
}



//borrar todo el carrito
const clear = ()=>{
    setCart([])
}

//borrar un item del carrito

const deleteItem = (id)=>{
    setCart(cart.filter((prod)=> prod.id !== id))
}


//si esta el prod en el carrito o no

const isInCart = (id)=>{
    return cart.some((prod)=> prod.id === id)
}

//total a pagar

const total = ()=>{
    return cart.reduce((acc,prod)=> acc += prod.quantity * prod.price, 0)
}

//total de items (cantidad)

const totalQty = ()=>{
    return cart.reduce((acc,prod)=> acc += prod.quantity, 0)
}


    return(
        <CartContext.Provider value={{cart, clear,addItem, deleteItem, total, totalQty}}>
            {children}
        </CartContext.Provider>
    )
}