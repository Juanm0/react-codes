import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FetchCard = ({pj}) => {
  return (
    <div>
        <p>{pj.name}</p>
    </div>
  )
}

export default FetchCard