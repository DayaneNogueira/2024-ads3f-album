import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Noticia() {
  const [noticia, setNoticia] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${id}&from=2024-02-28&sortBy=publishedAt&apiKey=77642efe119e4f87ab6643098b3283d8`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {});
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          {noticia.map((conteudo, index) => (
            <Col key={index}>
              <h1>{conteudo.title}</h1>
              <div>{conteudo.content}</div>
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
