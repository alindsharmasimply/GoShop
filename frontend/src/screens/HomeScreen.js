import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Product from "../components/Product";
//import products from "../products";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((data) => {
      console.log(data);
      setProducts(data.data);
    });
  }, []);
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
