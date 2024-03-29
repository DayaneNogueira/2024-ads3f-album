import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardNoticia } from "../components/CardNoticia";
import { Link } from "react-router-dom";

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    const url = "https://dummyjson.com/products";
    useState(() => {
        fetch(url)
            .then((resposta) => resposta.json())
            .then((data) => {
                setProdutos(data.products);
            });
    }, []);

    return (
        <Container>
            <Row>
                <Col>Produtos</Col>
            </Row>
            <Row>
                {produtos.map((produto, index) => (
                    <Col lg={4} xs={12} key={index}>
                        <Link to={`/produto/${produto.id}`}>
                            <CardNoticia
                                title={produto.title}
                                img={produto.thumbnail}
                                text={produto.text}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
