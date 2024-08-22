import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard() {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src="https://www.pcworld.com/wp-content/uploads/2023/04/acer-nitro-5-an515-44-r99q-main-100865204-orig.jpeg?quality=50&strip=all"
            />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;