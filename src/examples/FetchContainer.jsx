import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'

const FetchContainer = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    //1. Pido datos
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      //2. Traduzco
      .then((response) => response.json())
      //3. Guardo los datos
      .then((data) => setData(data.results))
      //4. Atrapo los errores
      .catch((error) => console.log(error))
  }, [])
  console.log(data);

  return (
    <div>FetchContainer
      <FetchList data={data} />
    </div>
  )
}

export default FetchContainer