import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Produto() {
  const [produto, setProduto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((resultado) => resultado.json())
      .then((data) => {
        setProduto(data);
      });
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Image src={produto?.thumbnail}/>
            <h1>{produto?.title}</h1>
            <div>{produto?.description}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
