import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div 
    style={{
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'10px'
    }}
    >
        <img src="/img/error-not-found.png" alt="imagen de error" />
        <Link to='/' className='btn btn-dark'>Volver a home</Link>
    </div>
  )
}

export default Error