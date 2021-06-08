import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";


const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <Card className="my-3 p-3 rounded" style={{ width: "18rem" }}>
          <Link to={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
          </Card.Text>

          <Card.Text as="h5">&#8377; {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
