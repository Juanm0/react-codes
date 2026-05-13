import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'
/* import {useFetch} from '../hooks/useFetch' */

const FetchContainer = () => {
  /* acá usamos un custom hook pero como es complicado mejor no lo usamos
const {data, error, loading} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=50')
*/
  const [data, setData] = useState([])
   useEffect(() => {
    //1. Pido datos
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      //2. Traduzco
      .then((response) => response.json())
      //3. Guardo los datos
      .then((data) => setData(data.results))
      //4. Atrapo los errores
      .catch((error) => console.log(error))
  }, [])

  /*console.log({data, error, loading});  */
  
  console.log(data); 

  return (
    <div>FetchContainer
      <FetchList data={data} />
    </div>
  )
}

export default FetchContainer