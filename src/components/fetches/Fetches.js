import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Col, Container, Row } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to only run this effect once on component mount

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100">
              <CardImg variant="top" src={product.image} alt={product.title} />
              <CardBody>
                <CardTitle>{product.title}</CardTitle>
                <CardText>${product.price}</CardText>
                <CardText>{product.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
