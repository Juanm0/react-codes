import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FetchCard = ({ pj }) => {

    const pokemonId = pj.url.split("/")[6]//agarra el número del Pokémon que viene dentro de la URL
    return (
        <div>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img
                    variant="top"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                />
                <Card.Body>
                    <Card.Title>
                        {pj.name}
                    </Card.Title>
                    <Card.Text>
                        Pokémon #{pokemonId}
                    </Card.Text>
                    <Button variant="primary">
                        Ver Más
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FetchCard