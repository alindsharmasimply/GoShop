import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <Card className="my-3 p-3 rounded" style={{ width: "18rem" }}>
        <a href={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>

          <Card.Text as="h5">&#8377; {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
