import { Card } from "react-bootstrap";

export const CardNoticia = (props) => {
  return (
    <Card>
      {props?.img && <Card.Img variant="top" src={props.img} />}
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.text}</Card.Text>
    </Card>
  );
};