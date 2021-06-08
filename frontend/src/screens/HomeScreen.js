import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";


const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;