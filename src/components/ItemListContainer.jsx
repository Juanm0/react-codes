import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import LoaderComponent from "./LoaderComponent"

const ItemListContainer = ({ saludo }) => {
const [data,setData] = useState([])
const {type}= useParams()
const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)//prendo el loader
        getProducts()//pide data
            .then((res) => {
                if(type){
                    //filtro
                    setData(res.filter((prod)=> prod.category === type))
                }else{
                    setData(res)
                }
            })//guarda data
            .catch((error) => console.log(error))//atrapa el error
            .finally(()=> setLoading(false))
    }, [type])//tiene que estar a la escucha del cambio de categoria
    console.log('ItemListContainer', data)

    return (
        <>
        
        {
        loading
        ? <LoaderComponent text={type ? 'Cargando categoria...' : 'Cargando productos...'}/>
        : <div>
            
             <h1>{saludo}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
            
            </div>}
        
        
        </>
       /*  <div>
            {<Input/>}
            <h1>{saludo}</h1>
            <ItemList data={data}/>
            {data.map((prod)=><p key={prod.id}>{prod.name}</p>)}
        </div> */
    )
}

export default ItemListContainer
