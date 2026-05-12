import React, {useEffect} from 'react'

const FetchContainer = () => {
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response)=> console.log(response))
    },[])
  return (
    <div>FetchContainer</div>
  )
}

export default FetchContainer