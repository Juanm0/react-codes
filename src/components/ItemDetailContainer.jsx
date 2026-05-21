import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncMock'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
const [detalle, setDetalle] = useState({})
const {id} = useParams()
const [loading, setloading] = useState(true)

useEffect(()=>{
    getOneProduct(id)
    .then((res)=>setDetalle(res))
    .catch((error)=>console.log(error))
    .finally(()=> setloading(false))
},[id])
  return (
    <div>
       {/*  <ItemDetail detalle={detalle}/> */}
       {
        loading ? <LoaderComponent text='Cargando detalle...'/> : <ItemDetail detalle={detalle}/>
       }
    </div>
  )
}

export default ItemDetailContainer