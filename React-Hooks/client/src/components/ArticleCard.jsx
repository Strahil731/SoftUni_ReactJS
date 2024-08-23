import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ArticleCard({ _id, title }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                </Card.Text> */}
                <Button as={Link} to={`/articles/${_id}/details`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;