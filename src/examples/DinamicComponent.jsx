import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import React from 'react'

const DinamicComponent = (props) => {
    /* ponemos un unas comillas a btn-text y le asignamos un valor sin guiones (con : ) por que javascript no toma guiones ni puntos cuando se pasa por props */
    const { tittle, description, "btn-text":btnText } = props
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200" />
            <Card.Body>
                <Card.Title>{tittle}</Card.Title>
                {description}
                <Card.Text>
                </Card.Text>
                <Button variant="primary">{btnText}</Button>
            </Card.Body>
        </Card>
    )
}

export default DinamicComponent