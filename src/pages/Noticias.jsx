import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardNoticia } from "../components/CardNoticia";

const API_KEY = "77642efe119e4f87ab6643098b3283d8";

export default function Noticias() {
  const [noticias, setNoticias] = useState();
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tecnologia&from=2024-02-28&sortBy=publishedAt&apiKey=77642efe119e4f87ab6643098b3283d8";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data.articles);
      });
  }, []); // quem vai escutar? [] vai escutar a entrada
  // [noticias]

  return (
    <Container>
      <Row>
        <Col>
          <h1>Notícias</h1>
        </Col>
        <Row>
          {noticias &&
            noticias.map((noticia, index) => (
              <Col lg={6} xs={12} key={index}>
                <CardNoticia
                  title={noticia.title}
                  text={noticia.content}
                  img={noticia.urlToImage}
                />
              </Col>
            ))}
        </Row>
      </Row>
    </Container>
  );
}
