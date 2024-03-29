import { Card } from "react-bootstrap";

export default function Album(props) {
  return (
    <Card>
        {
            props?.img && (
                <Card.Img variant="top" src={props.img} />
            )
        }
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}