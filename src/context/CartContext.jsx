import { createContext, useState } from "react";
//1. creamos el contexto

export const CartContext = createContext()

//2. creamos al proveedor

export const CartProvider = ({children})=>{
const [cart,setCart]=useState([])


    return(
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}